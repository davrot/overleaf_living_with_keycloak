#!/usr/bin/bash
pwd=$(pwd)

version=$(cat /docker/version)
 
mkdir -p _intern
rm -f _intern/files.yaml
echo "volumes:" > _intern/files.yaml

for file in $(find $(pwd)/${version} -type f | sed "s|$(pwd)/${version}||g" )
do
	echo "  - $(pwd)/${version}${file}:${file}" >> _intern/files.yaml
done
