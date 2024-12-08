#!/usr/bin/bash
version="5.2.1"

mkdir -p diffs
\rm ./diffs/*.diff

find original -type f | grep "\_${version}$" > found_files_to_compare.txt

for file in $(find ../services -type f | grep "\_${version}$" )
do
	filename=$(basename ${file})
	found=$(grep ${filename} found_files_to_compare.txt) 

    	# Check number of matches
    	match_count=$(echo "$found" | grep -c .)

    	if [ "$match_count" -eq 0 ]; then
        	# No match found, optionally log or handle
        	echo "Warning: No match found for $filename"
        	continue
    	elif [ "$match_count" -gt 1 ]; then
        	# Multiple matches found
        	echo "Alert: Multiple entries found for $filename:"
        	echo "$found"
    	else
        	# Exactly one match
		diff_file="./diffs/${filename}.diff"
		diff -u --from-file=${found} ${file} > ${diff_file}
    	fi

done
rm found_files_to_compare.txt


