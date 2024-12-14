mkdir -p _intern
dir_name=$(pwd | awk -F/ '{print $NF}')
rm ../_intern/${dir_name}.yaml
rm ../_prep/${dir_name}.sh