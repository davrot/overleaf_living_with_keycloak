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
        subprocess.run([f"mkdir -p /downloads/{username}/.ssh " ], shell=True)
        subprocess.run([f"chmod 700 /downloads/{username}/.ssh " ], shell=True)
        subprocess.run([f'ssh-keygen -t ed25519 -f /downloads/{username}/.ssh/hajtex -N "" ' ], shell=True)
        subprocess.run([f"cat /downloads/{username}/.ssh/hajtex.pub >> /downloads/{username}/.ssh/authorized_keys " ], shell=True)
        subprocess.run([f"chmod 600 /downloads/{username}/.ssh/hajtex " ], shell=True)
        subprocess.run([f"chmod 755 /downloads/{username} " ], shell=True)
        subprocess.run([f"chmod 700 /downloads/{username}/.ssh " ], shell=True)
        subprocess.run([f"chmod 600 /downloads/{username}/.ssh/authorized_keys " ], shell=True)
        subprocess.run([f"chown -R {username}:hajtex /downloads/{username}/.ssh " ], shell=True)
        subprocess.run([f"sudo -u {username} /usr/bin/git config --global user.email {username} " ], shell=True)
        subprocess.run([f"sudo -u {username} /usr/bin/git config --global user.name {username} " ], shell=True)

        subprocess.run([f"mkdir -p /downloads/{username}/sshkey " ], shell=True)
        subprocess.run([f"cp /downloads/{username}/.ssh/hajtex.pub /downloads/{username}/sshkey " ], shell=True)
        subprocess.run([f"cp /downloads/{username}/.ssh/hajtex /downloads/{username}/sshkey " ], shell=True)
        subprocess.run([f"chown -R {username}:hajtex /downloads/{username}/sshkey " ], shell=True)
        subprocess.run([f"cd /downloads/{username}/sshkey && sudo -u {username} /usr/bin/git init -q " ], shell=True)
        subprocess.run([f"cd /downloads/{username}/sshkey && sudo -u {username} /usr/bin/git add --all " ], shell=True)
        subprocess.run([f"cd /downloads/{username}/sshkey && sudo -u {username} /usr/bin/git commit -m 'by HajTex' " ], shell=True)
        subprocess.run([f"chown root:root /downloads/{username}/sshkey " ], shell=True)
        subprocess.run([f"chmod -R 0755 /downloads/{username}/sshkey " ], shell=True)



client.close()


