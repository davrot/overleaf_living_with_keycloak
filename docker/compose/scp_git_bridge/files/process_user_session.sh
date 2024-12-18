#!/bin/bash
# This script runs after successful authentication (both password and key-based)

if [ "$PAM_TYPE" != "open_session" ]; then
    exit 0
fi

# Run your post-login scripts
python3 /list_projects_of_user.py "$PAM_USER"
python3 /get_projects.py "$PAM_USER"
exit 0

