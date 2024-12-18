#!/bin/bash

read -s PAM_PASSWORD
echo "$PAM_PASSWORD" | /etc/kc-ssh-pam/kc-ssh-pam -c /etc/kc-ssh-pam/config.toml
AUTH_STATUS=$?

if [ $AUTH_STATUS -eq 0 ]; then
	python3 /list_projects_of_user.py $PAM_USER
    exit 0 
else
    exit 1
fi

