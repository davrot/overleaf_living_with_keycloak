import json
import requests  # type: ignore
from bs4 import BeautifulSoup
import argh
import uuid
import os
import glob

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
    session: requests.sessions.Session | None, base_url: str, project_id: str, base_path:str
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

        filename: str = os.path.join(base_path,  f"{project_id}.zip")
        # Save the file
        with open(filename, "w+b") as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)

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
            base_path=os.path.join(config_json["base_dir"], f"{username}")
        )

if __name__ == "__main__":
    argh.dispatch_command(main)
