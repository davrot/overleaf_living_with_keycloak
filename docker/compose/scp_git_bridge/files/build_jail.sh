mkdir -p /master_jail/bin
mkdir -p /master_jail/lib
mkdir -p /master_jail/lib64
mkdir -p /master_jail/lib/x86_64-linux-gnu
mkdir -p /master_jail/lib64
mkdir -p /master_jail/usr/lib/git-core

cp /bin/sh /master_jail/bin/
cp /usr/bin/git-shell /master_jail/bin/
cp /usr/bin/git-upload-pack /master_jail/bin/
cp -r /usr/lib/git-core/* /master_jail/usr/lib/git-core/

cd /master_jail/bin/
ldd sh | grep "=> " | awk {'print $3'} > /master_jail/ldd_list
ldd git-shell | grep "=> " | awk {'print $3'}  >> /master_jail/ldd_list
ldd git-upload-pack | grep "=> "| awk {'print $3'}  >> /master_jail/ldd_list

cd /master_jail/usr/lib/git-core
ldd git | grep "=> " | awk {'print $3'}  >> /master_jail/ldd_list

cd /master_jail
cat ldd_list | sort -u > ldd_list_nodups
\rm ldd_list
mv ldd_list_nodups ldd_list

for file in $(cat ldd_list)
do
    \cp $file /master_jail/lib/x86_64-linux-gnu
done
\rm ldd_list

\cp /lib64/ld-linux-x86-64.so.* /master_jail/lib64/
