import os
import json
import argh
import glob
import shutil

def main(username:str) -> None:

    if len(username) == 0:
        return 

    filename:str = os.path.join("/downloads/", f"{username}", "projects.json")
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
        return

    for i in range(0, len(key_list)):
        key_list[i] = os.path.join("/downloads/", f"{username}", key_list[i])

    key_list.append(os.path.join("/downloads/", f"{username}", "bin"))
    key_list.append(os.path.join("/downloads/", f"{username}", "dev"))
    key_list.append(os.path.join("/downloads/", f"{username}", "lib"))
    key_list.append(os.path.join("/downloads/", f"{username}", "lib64"))
    key_list.append(os.path.join("/downloads/", f"{username}", "usr"))
    key_list.append(os.path.join("/downloads/", f"{username}", "sshkey"))

    for entry in glob.glob(os.path.join("/downloads/", f"{username}", "*")):
        if os.path.isdir(entry):
            if not (entry in key_list):
                try:
                    shutil.rmtree(entry)
                except OSError as e:
                    print(f"Error deleting directory: {e}")

if __name__ == "__main__":
    argh.dispatch_command(main)
