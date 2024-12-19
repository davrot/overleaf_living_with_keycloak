#!/bin/bash
# This script runs after successful authentication (both password and key-based)

if [ "$PAM_TYPE" != "open_session" ]; then
    exit 0
fi

# Run your post-login scripts
python3 /list_projects_of_user.py "$PAM_USER"
python3 /get_projects.py "$PAM_USER"
python3 /clean_project.py "$PAM_USER"
rm -f /downloads/${PAM_USER}/projects.json

# Jails:
cp -rf /master_jail/* /downloads/${PAM_USER}
mkdir -p /downloads/${PAM_USER}/dev
mknod -m 666 /downloads/${PAM_USER}/dev/null c 1 3
mknod -m 666 /downloads/${PAM_USER}/dev/zero c 1 5
mknod -m 666 /downloads/${PAM_USER}/dev/random c 1 8
mknod -m 666 /downloads/${PAM_USER}/dev/urandom c 1 9
chmod +x /downloads/${PAM_USER}/usr/lib/git-core/*
chown root:root /downloads/${PAM_USER}
chmod 0755 /downloads/${PAM_USER}

exit 0

