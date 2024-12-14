#!/bin/bash
docker_path="/docker/compose/overleafserver/data/"
mkdir -p ${docker_path}
rm ${docker_path}/prep.sh
for file in $(ls -v _prep/*.sh | grep -v "^_prep/END_default.sh"); do
    cat "${file}" >> ${docker_path}/prep.sh
done
cat _prep/END_default.sh >> ${docker_path}/prep.sh