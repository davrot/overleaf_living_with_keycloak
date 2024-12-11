sh dev_tools/get_file_list.sh
mkdir -p ../_intern
dir_name=$(pwd | awk -F/ '{print $NF}')
ln -s $(pwd)/_intern/files.yaml ../_intern/${dir_name}.yaml
ln -s $(pwd)/_prep/prep.sh ../_prep/${dir_name}.sh

