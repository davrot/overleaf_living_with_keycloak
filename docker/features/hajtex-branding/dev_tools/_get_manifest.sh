#!/usr/bin/bash
dockername="sharelatex/sharelatex:"
version=$(cat /docker/version)
dockername=${dockername}${version}
pwd=$(pwd)
base_public_dir="/docker/features/hajtex-branding/${version}/overleaf/services/web/public"

mkdir -p ${pwd}/temp
docker run --entrypoint "/usr/bin/sh" -v ${pwd}/temp:/export  ${dockername} -c "cp /overleaf/services/web/public/manifest.json /export"

rm -rf ${base_public_dir}/images
mkdir -p ${base_public_dir}/images

# SVG
for file in $(find ${base_public_dir} -type f | grep ".svg$" | grep -v ${base_public_dir}/images )
do
	search_for=$(basename ${file})
	target_1=$(cat temp/manifest.json | grep $search_for | sed s/" "/""/g | sed s/","/""/g | sed s/":"/" "/g | sed s/'"'/''/g | awk {'print $1'})
	target_2=$(cat temp/manifest.json | grep $search_for | sed s/" "/""/g | sed s/","/""/g | sed s/":"/" "/g | sed s/'"'/''/g | awk {'print $2'})

	if [ -n "${target_1}" ]; then
		cp -f ${file} ${base_public_dir}/${target_1}
	fi

	if [ -n "${target_2}" ]; then
		cp -f ${file} ${base_public_dir}/${target_2}
	fi
done

# PNG
for file in $(find ${base_public_dir} -type f | grep ".png$" | grep -v ${base_public_dir}/images )
do
	search_for=$(basename ${file})
	target_1=$(cat temp/manifest.json | grep $search_for | sed s/" "/""/g | sed s/","/""/g | sed s/":"/" "/g | sed s/'"'/''/g | awk {'print $1'})
	target_2=$(cat temp/manifest.json | grep $search_for | sed s/" "/""/g | sed s/","/""/g | sed s/":"/" "/g | sed s/'"'/''/g | awk {'print $2'})

	if [ -n "${target_1}" ]; then
		cp -f ${file} ${base_public_dir}/${target_1}
	fi

	if [ -n "${target_2}" ]; then
		cp -f ${file} ${base_public_dir}/${target_2}
	fi
done

# ICO
for file in $(find ${base_public_dir} -type f | grep ".ico$" | grep -v ${base_public_dir}/images )
do
	search_for=$(basename ${file})
	target_1=$(cat temp/manifest.json | grep $search_for | sed s/" "/""/g | sed s/","/""/g | sed s/":"/" "/g | sed s/'"'/''/g | awk {'print $1'})
	target_2=$(cat temp/manifest.json | grep $search_for | sed s/" "/""/g | sed s/","/""/g | sed s/":"/" "/g | sed s/'"'/''/g | awk {'print $2'})

	if [ -n "${target_1}" ]; then
		cp -f ${file} ${base_public_dir}/${target_1}
	fi

	if [ -n "${target_2}" ]; then
		cp -f ${file} ${base_public_dir}/${target_2}
	fi
done

# JPG
for file in $(find ${base_public_dir} -type f | grep ".jpg$" | grep -v ${base_public_dir}/images )
do
	search_for=$(basename ${file})
	target_1=$(cat temp/manifest.json | grep $search_for | sed s/" "/""/g | sed s/","/""/g | sed s/":"/" "/g | sed s/'"'/''/g | awk {'print $1'})
	target_2=$(cat temp/manifest.json | grep $search_for | sed s/" "/""/g | sed s/","/""/g | sed s/":"/" "/g | sed s/'"'/''/g | awk {'print $2'})

	if [ -n "${target_1}" ]; then
		cp -f ${file} ${base_public_dir}/${target_1}
	fi

	if [ -n "${target_2}" ]; then
		cp -f ${file} ${base_public_dir}/${target_2}
	fi
done

rm -rf ${pwd}/temp
