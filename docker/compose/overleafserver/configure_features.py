# apt -y install python3-pip python3-strictyaml
import glob
import strictyaml as yaml

with open("compose_base.yaml",'r') as file:
    lines = file.read()
yaml_base = yaml.load(lines).data
yaml_base['services']['overleafserver']['volumes']: list[str] = []

filenames: list[str] = sorted(list(glob.glob("features/*.yaml")))

for filename in filenames:

    with open(filename,'r') as file:
        lines = file.read()

    for entry in yaml.load(lines).data['volumes']:
        yaml_base['services']['overleafserver']['volumes'].append(entry)

with open("compose.yaml",'w') as file:
    file.write(yaml.as_document(yaml_base).as_yaml())

