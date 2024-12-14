#!/usr/bin/bash
dockername="sharelatex/sharelatex:"
version=$(cat /docker/version)
dockername=${dockername}${version}
prefix_dir="/docker/features/_masterfiles/$version"

mkdir -p /docker/features/_masterfiles/${version}

# Make the necessary dirs
for dir_found in $(find ../${version} -type d | sed "s/..\/${version}"/""/g | grep -v -e '^[[:space:]]*$')
do
	mkdir -p ${prefix_dir}${dir_found}
done

# Get files from the container 
for file_found in $(find "../${version}" -type f | sed "s|../${version}||g" | grep -v ".png$" | grep -v ".svg$" | grep -v ".ico$" | grep -v ".jpg$"); do
	echo "$file_found" 
 	docker run --entrypoint "/usr/bin/sh" -v /docker/features/_masterfiles/${version}:/export  ${dockername} -c "cp ${file_found} /export/${file_found}"
done

# Section: Make diffs

rm -rf ${version}
mkdir -p ${version}

# Make the necessary dirs
for dir_found in $(find ../${version} -type d | sed "s/..\/${version}"/""/g | grep -v -e '^[[:space:]]*$')
do
	mkdir -p ${version}${dir_found}
done


# Make diffs
for file in $(find ../$version -type f | sed "s|../${version}||g" | grep -v ".png$" | grep -v ".svg$" | grep -v ".ico$" | grep -v ".jpg$")
do
	if [ -f ${prefix_dir}${file} ]; then
		echo Make diff for ${prefix_dir}${file}
		diff -u --from-file=${prefix_dir}${file} ../$version${file} > ${version}${file}.diff
	fi
done
