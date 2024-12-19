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
mkdir -p /downloads/${PAM_USER}/bin
mkdir -p /downloads/${PAM_USER}/lib 
mkdir -p /downloads/${PAM_USER}/lib64
cp /bin/sh /downloads/${PAM_USER}/bin/
cp /usr/bin/git-shell /downloads/${PAM_USER}/bin/
cp /usr/bin/git-upload-pack /downloads/${PAM_USER}/bin/
mkdir -p /downloads/${PAM_USER}/lib/x86_64-linux-gnu
mkdir -p /downloads/${PAM_USER}/lib64
cp /lib/x86_64-linux-gnu/libc.so.6 /downloads/${PAM_USER}/lib/x86_64-linux-gnu/
cp /lib/x86_64-linux-gnu/libpcre2-8.so.0 /downloads/${PAM_USER}/lib/x86_64-linux-gnu/
cp /lib/x86_64-linux-gnu/libz.so.1 /downloads/${PAM_USER}/lib/x86_64-linux-gnu/
cp /lib64/ld-linux-x86-64.so.2 /downloads/${PAM_USER}/lib64/
mkdir -p /downloads/${PAM_USER}/dev
mknod -m 666 /downloads/${PAM_USER}/dev/null c 1 3
mknod -m 666 /downloads/${PAM_USER}/dev/zero c 1 5
mknod -m 666 /downloads/${PAM_USER}/dev/random c 1 8
mknod -m 666 /downloads/${PAM_USER}/dev/urandom c 1 9
mkdir -p /downloads/${PAM_USER}/usr/lib/git-core
cp -r /usr/lib/git-core/* /downloads/${PAM_USER}/usr/lib/git-core/
chmod +x /downloads/${PAM_USER}/usr/lib/git-core/*
chown root:root /downloads/${PAM_USER}
chmod 0755 /downloads/${PAM_USER}


exit 0

