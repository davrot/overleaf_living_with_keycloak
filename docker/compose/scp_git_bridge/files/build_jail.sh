mkdir -p /master_jail/bin
mkdir -p /master_jail/lib
mkdir -p /master_jail/lib64
mkdir -p /master_jail/lib/x86_64-linux-gnu
mkdir -p /master_jail/lib64
mkdir -p /master_jail/usr/lib/git-core
mkdir -p /master_jail/usr/sbin
mkdir -p /master_jail/etc

cat <<EOF > /master_jail/etc/rush.rc
rush 2.0

rule git-upload-pack
        match \$command ~ "^/bin/sh"
        match \$SSH_ORIGINAL_COMMAND ~ "git-upload-pack '(.+)'"
        set[0] = "/usr/lib/git-core/git-upload-pack"
        set[1] = %1
        interactive true
        umask 022
EOF

cd /master_jail/etc/
chmod 444 rush.rc
cd ..
chmod 0755 etc

cp /bin/sh /master_jail/bin/
cp /usr/lib/git-core/git-submodule /master_jail/usr/lib/git-core/
cp /usr/lib/git-core/git /master_jail/usr/lib/git-core/
cp /usr/lib/git-core/git-upload-pack /master_jail/usr/lib/git-core/
cp /usr/sbin/rush /master_jail/usr/sbin
chmod +s /master_jail/usr/sbin
chmod +x /master_jail/usr/lib/git-core/*

# Lets extract which libs we need
cd /master_jail/bin/
ldd sh | grep "=> " | awk {'print $3'} > /master_jail/ldd_list

cd /master_jail/usr/lib/git-core
ldd git | grep "=> " | awk {'print $3'}  >> /master_jail/ldd_list
ldd git-submodule | grep "=> " | awk {'print $3'}  >> /master_jail/ldd_list

cd /master_jail/usr/sbin
ldd rush | grep "=> " | awk {'print $3'}  >> /master_jail/ldd_list

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

