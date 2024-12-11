# apt -y install python3-pip python3-strictyaml
import glob
import strictyaml as yaml
from collections import Counter
import os
import diff_match_patch as dmp_module

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

with open("/docker/version",'r') as file:
	version:str = file.readline().lstrip().rstrip()

for duplicate in duplicates:
    idx = [i for i, x in enumerate(volume_collection_target) if x.endswith(duplicate)]
    duplicate_entries = [volume_collection[i] for i in idx]
    data: list[str] = []

    # Master file
    # Surpress the leading / of duplicate
    with open(os.path.join("_masterfiles", version, duplicate[1:]), "r") as file:
        masterfile = file.read()

    # Load all the duplicate version
    for filename_combi in duplicate_entries:
        filename = filename_combi.split(":")[0]
        with open(filename, "r") as file:
            data.append(file.read())

    assert len(data) > 1

    # Calculate the diffs to the master file
    patches_found = []
    for position in range(0, len(data)):

        dmp = dmp_module.diff_match_patch()
        patches_found.append(dmp.patch_make(masterfile, data[position]))

    print(f"Combination {duplicate} with ")
    for position in range(0, len(patches_found)):
        result = dmp.patch_apply(patches_found[position], masterfile)
        masterfile = result[0]

        if all(result[1]) is False:
            print(f"FAILED {duplicate_entries[position].split(":")[0]}")
            exit(1)
        else:
            print(f"OK {duplicate_entries[position].split(":")[0]}")

    path = os.path.join(
        "/docker/features/_patched", version, os.path.dirname(duplicate)[1:]
    )
    os.makedirs(path, exist_ok=True)
    filename = os.path.join("/docker/features/_patched", version, duplicate[1:])

    with open(filename, "w") as file:
        file.write(masterfile)

    volume_collection.append(filename + ":" + duplicate)
    print()

# Filter out all the duplicates
volume_collection_unique: list[str] = []
for entry in volume_collection:
    if (((entry.split(":")[-1] in duplicates)) is False) or entry.split(":")[
        0
    ].startswith("/docker/features/_patched") is True:
        volume_collection_unique.append(entry)

yaml_base["services"]["overleafserver"]["volumes"] = volume_collection_unique
with open(os.path.join(docker_dir, "compose.yaml"), "w") as file:
    file.write(yaml.as_document(yaml_base).as_yaml())
