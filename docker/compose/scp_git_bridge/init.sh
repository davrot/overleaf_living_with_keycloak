#!/bin/bash

# If mounted /etc is empty, copy from backup
if [ ! -d /etc/skel ]; then
    cp -a /etc_original/* /etc/
	mkdir -p /etc/skel/
	chmod  0700 /etc/skel/.ssh
	rm -f /etc/skel/.profile
	rm -f /etc/skel/.bashrc
	rm -f /etc/skel/.bash_logout
fi


# Create minimal system groups and users
if ! getent group nogroup >/dev/null 2>&1; then
    groupadd -r nogroup
fi

# Create a minimal system user for SSH and SSSD
if ! id -u sshd >/dev/null 2>&1; then
    useradd -r -g nogroup -s /bin/false sshd
fi

if [ ! -d /run/sshd ]; then
    mkdir -p /run/sshd
    chmod -R 0700 /run/sshd
fi

chmod 644 /etc/passwd
chmod 644 /etc/group
chmod 600 /etc/shadow

# Ensure hajtex group exists
if ! getent group hajtex >/dev/null 2>&1; then
    groupadd -r hajtex
fi

echo "root ALL=(ALL) ALL" > /etc/sudoers

/usr/sbin/sshd -D &

sleep infinity
