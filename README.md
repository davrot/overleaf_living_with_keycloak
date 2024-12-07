# Assumptions

1. You system is docker ready.
2. You have a working DNS entry and you have non-selfsigned SSL certificates
3. We assume that a ufw firewall is used.

# Notes 

1. All the docker container will be placed during this installation at /docker/.... . 

# Ready the docker networks

We will have to networks keycloak-network and 

```
docker network create keycloak-network
snetz=`docker network inspect keycloak-network | grep "Subnet"  | sed s/" "/""/g | sed s/"\,"/""/g | sed s/":"/"\n"/g  | grep -v "Subnet" | sed s/'"'/''/g`
nid=`docker network ls | grep keycloak-network | awk '{print $1}'`

ufw allow in on br-$nid
ufw route allow in on br-$nid
ufw route allow out on br-$nid
iptables -t nat -A POSTROUTING ! -o br-$nid -s $snetz -j MASQUERADE
```

```
docker network create overleaf-network
snetz=`docker network inspect overleaf-network | grep "Subnet"  | sed s/" "/""/g | sed s/"\,"/""/g | sed s/":"/"\n"/g  | grep -v "Subnet" | sed s/'"'
nid=`docker network ls | grep overleaf-network | awk '{print $1}'`

ufw allow in on br-$nid
ufw route allow in on br-$nid
ufw route allow out on br-$nid
iptables -t nat -A POSTROUTING ! -o br-$nid -s $snetz -j MASQUERADE
```
Check if this worked:

```
>> docker network ls
NETWORK ID     NAME               DRIVER    SCOPE
[...]
8e4e9f6eba80   keycloak-network   bridge    local
acc1f3aff0b7   overleaf-network   bridge    local
```
(The number is front are different for every installation.)

```
>> ufw status | grep 8e4e9f6eba80
Anywhere on br-8e4e9f6eba80 ALLOW       Anywhere                  
Anywhere (v6) on br-8e4e9f6eba80 ALLOW       Anywhere (v6)             
Anywhere                   ALLOW FWD   Anywhere on br-8e4e9f6eba80
Anywhere on br-8e4e9f6eba80 ALLOW FWD   Anywhere                  
Anywhere (v6)              ALLOW FWD   Anywhere (v6) on br-8e4e9f6eba80
Anywhere (v6) on br-8e4e9f6eba80 ALLOW FWD   Anywhere (v6)
```

```
>> ufw status | grep acc1f3aff0b7
Anywhere on br-acc1f3aff0b7 ALLOW       Anywhere                  
Anywhere (v6) on br-acc1f3aff0b7 ALLOW       Anywhere (v6)             
Anywhere                   ALLOW FWD   Anywhere on br-acc1f3aff0b7
Anywhere on br-acc1f3aff0b7 ALLOW FWD   Anywhere                  
Anywhere (v6)              ALLOW FWD   Anywhere (v6) on br-acc1f3aff0b7
Anywhere (v6) on br-acc1f3aff0b7 ALLOW FWD   Anywhere (v6)
```

