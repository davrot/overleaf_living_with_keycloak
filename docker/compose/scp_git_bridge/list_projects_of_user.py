import pymongo
import json
import argh
import os
import pwd
import grp

def list_projects_of_user(
    email,
    container_name: str = "overleafmongo",
    port: int = 27017,
    export_path: str = "/downloads/",
) -> None:

    if len(email) == 0:
        return

    client = pymongo.MongoClient(container_name, port)
    db = client.sharelatex
    users = db.users

    user_info = users.find_one({"email": email})

    if user_info is None:
        return

    uid = user_info["_id"]

    projects = db.projects

    project_main_cursor = projects.find({"owner_ref": uid, "active": True})

    project_found: list = []
    for project_main in project_main_cursor:
        project_found.append((str(project_main["_id"]), project_main["name"]))

    project_collaborator_cursor = projects.find({"collaberator_refs": uid, "active": True})
    for project_collaborator in project_collaborator_cursor:
        project_found.append(
            (str(project_collaborator["_id"]), project_collaborator["name"])
        )
    client.close()

    with open(os.path.join(export_path, f"{email}", "projects.json"), "w") as file:
        json.dump(dict(project_found), file)
        fd = file.fileno()
        uid = pwd.getpwnam(email).pw_uid
        gid = grp.getgrnam("root").gr_gid
        os.fchown(fd, uid, gid)
        os.chmod(os.path.join(export_path, f"{email}", "projects.json"), 0o440)
    return


if __name__ == "__main__":
    argh.dispatch_command(list_projects_of_user)
