import json

import requests  # type: ignore
from bs4 import BeautifulSoup
import tempfile
import argh


def extract_login_details(base_url):
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


def keycloak_login(base_url, username, password):
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


def download_project_zip(session, base_url, project_id):
    # Construct the download URL
    download_url = f"{base_url}/project/{project_id}/download/zip"

    if session is None:
        return None

    if len(base_url) == 0:
        return None

    try:
        # Download the file
        response = session.get(download_url, stream=True)
        response.raise_for_status()  # Raise an exception for HTTP errors

        # Save the file
        with tempfile.NamedTemporaryFile(delete_on_close=False) as file:
            filename = file.name
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)

        return filename

    except requests.RequestException:
        return None


def main(project_id: str = ""):

    if len(project_id) == 0:
        print("==== NOT FOUND ====")
        exit(1)

    with open("config.json", "r") as file:
        config_json = json.load(file)

    session = keycloak_login(
        base_url=config_json["hajtex_base_url"],
        username=config_json["admin_username"],
        password=config_json["admin_password"],
    )

    filename = download_project_zip(
        session=session,
        base_url=config_json["hajtex_base_url"],
        project_id=project_id,
    )
    if filename is not None:
        print(filename)
        exit(0)
    else:
        print("==== NOT FOUND ====")
        exit(1)


if __name__ == "__main__":
    argh.dispatch_command(main)
