config_dir="/docker/compose/overleafserver/features"
mkdir -p ${config_dir}
dir_name=$(pwd | awk -F/ '{print $NF}')
ln -s $(pwd)/files.yaml ${config_dir}/${dir_name}.yaml

