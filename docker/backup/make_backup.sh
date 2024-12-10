#!/bin/bash
cd /docker/compose/keycloakpostgres
sh backup.sh

cd /docker/compose/overleafmongo
sh backup.sh

cd /docker/compose/overleafredis
sh backup.sh

cd /docker/backup/
rsync -avz --delete -e "ssh -i /docker/backup/backup" /docker overleaf@backup.zfn.uni-bremen.de:/home/overleaf/fb1/
