pwd=$(pwd)
version="5.2.1"
 
mkdir -p _intern
rm -f _intern/files.yaml
echo "volumes:" > _intern/files.yaml

for file in $(find "${pwd}/services" -type f | grep "_${version}")
do
file_in_docker=$(echo ${file} | sed "s|${pwd}|/overleaf|g" | sed "s|_${version}||g")

echo "  - ${file}:${file_in_docker}" >> _intern/files.yaml

done
