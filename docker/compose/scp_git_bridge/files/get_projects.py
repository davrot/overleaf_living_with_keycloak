import json
import requests  # type: ignore
from bs4 import BeautifulSoup
import argh
import uuid
import os
import glob
import subprocess


def extract_login_details(base_url: str) -> dict | None:
    try:
        # Start a session to maintain cookies
        session = requests.Session()

        # Fetch the login page
        login_page_url = f"{base_url}/login/oidc"
        response = session.get(login_page_url)
        response.raise_for_status()

        # Parse the HTML
        soup = BeautifulSoup(response.text, "html.parser")

        # Find the form
        login_form = soup.find("form", {"id": "kc-form-login"})

        if not login_form:
            raise ValueError("Login form not found")

        # Extract the action URL
        action_url = login_form.get("action")

        # Find any hidden inputs
        hidden_inputs = login_form.find_all("input", type="hidden")

        # Prepare hidden input data
        hidden_data = {
            input.get("name"): input.get("value", "") for input in hidden_inputs
        }

        return {
            "session": session,
            "action_url": action_url,
            "hidden_data": hidden_data,
        }

    except Exception:
        return None


def keycloak_login(
    base_url: str, username: str, password: str
) -> requests.sessions.Session | None:
    # Extract login details
    login_details = extract_login_details(base_url)

    if not login_details:
        return None

    session = login_details["session"]
    action_url = login_details["action_url"]
    hidden_data = login_details["hidden_data"]

    # Prepare login payload
    login_data = {
        "username": username,
        "password": password,
        **hidden_data,  # Include any hidden input fields
    }

    try:
        # Perform login POST request
        login_response = session.post(action_url, data=login_data, allow_redirects=True)

        # Check if login was successful
        if login_response.status_code in [200, 302]:
            return session
        else:
            return None

    except requests.RequestException:
        return None


def download_project_zip(
    session: requests.sessions.Session | None, base_url: str, project_id: str, base_path:str, username:str
) -> str:
    # Construct the download URL
    download_url = f"{base_url}/project/{project_id}/download/zip"

    if session is None:
        return ""

    if len(base_url) == 0:
        return ""

    try:
        # Download the file
        response = session.get(download_url, stream=True)
        response.raise_for_status()  # Raise an exception for HTTP errors
        os.makedirs(os.path.join(base_path,  f"{project_id}"), exist_ok=True, mode=0o700)
        filename: str = os.path.join(base_path,  f"{project_id}", "data.zip")
        # Save the file
        with open(filename, "w+b") as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)

        subprocess.run([f"cd /downloads/{username}/{project_id} && /usr/bin/unzip -o data.zip " ], shell=True)
        subprocess.run([f"rm -f /downloads/{username}/{project_id}/data.zip" ], shell=True)
        subprocess.run([f"chown -R {username}:hajtex /downloads/{username}/{project_id} " ], shell=True)
        subprocess.run([f"chmod -R 0700 /downloads/{username}/{project_id} " ], shell=True)

        if not os.path.isdir("/downloads/{username}/{project_id}/.git"):
            subprocess.run([f"sudo -u {username} /usr/bin/git config --global user.email {username} " ], shell=True)
            subprocess.run([f"sudo -u {username} /usr/bin/git config --global user.name {username} " ], shell=True)
            subprocess.run([f"cd /downloads/{username}/{project_id} && sudo -u {username} /usr/bin/git init -q " ], shell=True)

        subprocess.run([f"cd /downloads/{username}/{project_id} && sudo -u {username} /usr/bin/git add --all " ], shell=True)
        subprocess.run([f"cd /downloads/{username}/{project_id} && sudo -u {username} /usr/bin/git commit -m 'by HajTex' " ], shell=True)
        subprocess.run([f"chown -R {username}:hajtex /downloads/{username}/{project_id} " ], shell=True)
        subprocess.run([f"chown root:root /downloads/{username}/{project_id} " ], shell=True)
        subprocess.run([f"chmod -R 0755 /downloads/{username}/{project_id} " ], shell=True)



        return filename

    except requests.RequestException:
        return ""

def main(username:str) -> None:

    if len(username) == 0:
        return ""

    with open("config.json", "r") as file:
        config_json = json.load(file)

    filename:str = os.path.join(config_json["base_dir"], f"{username}", "projects.json")
    try:
        with open(filename, "r") as file:
            projects_json = json.load(file)
    except json.decoder.JSONDecodeError:
            projects_json = dict()
    except FileNotFoundError:
            projects_json = dict()

    key_list: list[str] = []
    for key in projects_json.keys():
        key_list.append(key)

    if len(key_list) == 0:
        return ""

    for element in glob.glob(os.path.join(config_json["base_dir"], f"{username}", "*.zip")):
        try:
            os.remove(element)
        except FileNotFoundError:
            pass

    session: requests.sessions.Session | None = keycloak_login(
        base_url=config_json["hajtex_base_url"],
        username=config_json["admin_username"],
        password=config_json["admin_password"],
    )

    for project_id in key_list:
        filename = download_project_zip(
            session=session,
            base_url=config_json["hajtex_base_url"],
            project_id=project_id,
            base_path=os.path.join(config_json["base_dir"], f"{username}"),
            username=username,
        )

if __name__ == "__main__":
    argh.dispatch_command(main)
