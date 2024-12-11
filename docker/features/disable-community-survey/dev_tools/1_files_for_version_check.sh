dockername="overleafserver"
version=5.2.1
extract_path_on_host=/docker/compose/overleafserver/data/original

################
\rm -r ./original

mkdir -p ${extract_path_on_host}
\rm ${extract_path_on_host}/*

find ../services -type f | grep "\_${version}$" | sed s/"^\.\."/"\/overleaf"/g | sed s/""\_${version}$""/""/g |\
 	awk '{print "docker exec -it dockername bash -ce \"cp " $1 " /var/lib/overleaf/original \""}' | sed s/"dockername"/"${dockername}"/g > todo_files.sh
sh todo_files.sh
rm todo_files.sh

mv ${extract_path_on_host} .

for file in $(find original -type f)
do
	mv ${file} ${file}_${version}
done


