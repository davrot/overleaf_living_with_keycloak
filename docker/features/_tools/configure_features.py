# apt -y install python3-pip python3-strictyaml
import glob
import strictyaml as yaml  # type: ignore
from collections import Counter
import os
import shutil
import subprocess

# import diff_match_patch as dmp_module

docker_dir: str = "/docker/compose/overleafserver"

with open("compose_base.yaml", "r") as file:
    lines = file.read()
yaml_base = yaml.load(lines).data
yaml_base["services"]["overleafserver"]["volumes"] = []

filenames: list[str] = sorted(list(glob.glob("_intern/*.yaml")))

volume_collection: list[str] = []
volume_collection_target: list[str] = []
setting_files: list[str] = []

for filename in filenames:

    with open(filename, "r") as file:
        lines = file.read()

    for entry in yaml.load(lines).data["volumes"]:
        volume_collection.append(entry)
        volume_collection_target.append(entry.split(":")[-1])

# Check for duplicates
duplicates = [
    item for item, count in Counter(volume_collection_target).items() if count > 1
]

with open("/docker/version", "r") as file:
    version: str = file.readline().lstrip().rstrip()


# Filter out all the duplicates
volume_collection_unique: list[str] = []
for entry in volume_collection:
    if (((entry.split(":")[-1] in duplicates)) is False) or entry.split(":")[
        0
    ].startswith("/docker/features/_patched") is True:
        volume_collection_unique.append(entry)
    else:
        print(f"Removed: {entry}")

# Manuel overwrite
with open("manuel_overwrite/_intern/files.yaml", "r") as file:
    lines = file.read()

for entry in yaml.load(lines).data["volumes"]:
    volume_collection_unique.append(entry)

# Make new yaml file

yaml_base["services"]["overleafserver"]["volumes"] = volume_collection_unique
with open(os.path.join(docker_dir, "compose.yaml"), "w") as file:
    file.write(yaml.as_document(yaml_base).as_yaml())
