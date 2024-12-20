import requests  # type: ignore
import json
from requests.auth import HTTPBasicAuth  # type: ignore


def add_keycloak_user(username):

    print(f"Start to create user {username} via OIDC")

    with open("config.json", "r") as file:
        config = json.load(file)

    token_url = f"{config['keycloak_url']}/realms/master/protocol/openid-connect/token"
    token_data = {
        "grant_type": "password",
        "username": config["admin_username"],
        "password": config["admin_password"],
    }
    users_url = f"{config['keycloak_url']}/admin/realms/master/users"

    print("-- Get token")
    # Get token
    try:
        response = requests.post(
            token_url,
            data=token_data,
            auth=HTTPBasicAuth(config["client_id"], config["client_secret"]),
        )
        response.raise_for_status()

    except requests.exceptions.HTTPError:
        return False

    access_token = response.json()["access_token"]
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    }

    # Check if user exists
    params = {"username": username, "exact": "true"}

    print("-- Check if user exists")

    try:
        response = requests.get(users_url, headers=headers, params=params)
        response.raise_for_status()

        # Response is a list of users matching the criteria
        users = response.json()

        # If we found any users with exact username match, the user exists
        if len(users) > 0:
            return False

    except requests.exceptions.HTTPError:
        return False

    print("-- Make new user")

    # Make new user
    new_user = {
        "username": username,
        "enabled": True,
        "emailVerified": False,
        "firstName": " ",
        "lastName": " ",
        "email": username,
        "requiredActions": ["UPDATE_PASSWORD"],
    }

    try:
        # Create the user
        response = requests.post(users_url, headers=headers, data=json.dumps(new_user))
        response.raise_for_status()

    except requests.exceptions.HTTPError:
        return False

    print("-- DONE")

    return True
