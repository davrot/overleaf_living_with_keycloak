import pymongo
import pwd
import subprocess

container_name:str = "overleafmongo"
port: int = 27017

client = pymongo.MongoClient(container_name, port)
db = client.sharelatex
users = db.users

cursor = users.find()

for user in cursor:
    username: str = user['email']

    create_new_user: bool = False
    try:
        pwd.getpwnam(username)
        create_new_user = False
    except KeyError:
        create_new_user = True

    if create_new_user:
        subprocess.run([f"/usr/sbin/useradd {username} -g hajtex -k /etc/skel -m -d /downloads/{username}" ], shell=True)
        subprocess.run([f"chown -R {username}:root /downloads/{username}" ], shell=True)
        subprocess.run([f"chmod -R 0770 /downloads/{username}" ], shell=True)


client.close()


