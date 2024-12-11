#!/bin/bash
docker_path="/docker/compose/overleafserver/data/"
mkdir -p ${docker_path}
rm ${docker_path}/prep.sh
for file in $(ls -v _prep/*.sh); do
    cat "${file}" >> ${docker_path}/prep.sh
done