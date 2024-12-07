# Assumptions

1. You system is docker ready.
2. You have a working DNS entry and you have non-selfsigned SSL certificates
3. We assume that a ufw firewall is used.

# Notes 

1. All the docker container will be placed during this installation at /docker/.... .
2. Make absolutely sure that the Fully Qualified Domain Name (FQDN) is **NOT** in the /etc/hosts of the server.

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
# Docker keycloak's postgres (/docker/compose/keycloakpostgres)

The .env file needs to be edited. Fix POSTGRES_PASSWORD=REDACTED with a real password. 

Then start the container with 
```
>> sh up.sh
```

Check the logs if everthing went well:
```
>> sh logs.sh
[...]
keycloakpostgres  | 2024-12-07 17:37:18.844 UTC [1] LOG:  starting PostgreSQL 16.6 (Debian 16.6-1.pgdg120+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
keycloakpostgres  | 2024-12-07 17:37:18.845 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
keycloakpostgres  | 2024-12-07 17:37:18.845 UTC [1] LOG:  listening on IPv6 address "::", port 5432
keycloakpostgres  | 2024-12-07 17:37:18.911 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
keycloakpostgres  | 2024-12-07 17:37:18.981 UTC [65] LOG:  database system was shut down at 2024-12-07 17:37:18 UTC
keycloakpostgres  | 2024-12-07 17:37:19.017 UTC [1] LOG:  database system is ready to accept connections
```

# Docker keycloak (/docker/compose/keycloakserver)

The .env file needs to be edited. 
- Fix POSTGRES_PASSWORD=REDACTED with same password used for the keycloakpostgres container.
- Fix KEYCLOAK_ADMIN_PASSWORD=REDACTED with a new password.
- Fix KEYCLOAK_HOSTNAME=YOUR_HOSTNAME with your fully qualified domain name.

Then start the container with 
```
>> sh up.sh
```

Check the logs if everthing went well (give it time...):

```
>> sh logs.sh
[...]
keycloakserver  | 2024-12-07 17:52:23,717 INFO  [io.quarkus] (main) Keycloak 26.0.7 on JVM (powered by Quarkus 3.15.1) started in 39.709s. Listening on: http://0.0.0.0:8080. Management interface listening on http://0.0.0.0:9000.
keycloakserver  | 2024-12-07 17:52:23,718 INFO  [io.quarkus] (main) Profile prod activated. 
keycloakserver  | 2024-12-07 17:52:23,718 INFO  [io.quarkus] (main) Installed features: [agroal, cdi, hibernate-orm, jdbc-postgresql, keycloak, narayana-jta, opentelemetry, reactive-routes, rest, rest-jackson, smallrye-context-propagation, smallrye-health, vertx]
```

# Docker proxy (/docker/compose/nginx)

You need your SSL certificates here.  
* Put the **public** certificate and the root ca certifcate chain together in /docker/compose/nginx/ca.pem
* Put the **private** certificate in /docker/compose/nginx/key.pem

We will go through several nginx.conf files because we can not start the proxy if the services its will proxy are not availabe. Thus we start with nginx_a.conf (containing only the keycloak).
```
>> cp nginx_a.conf nginx.conf
>> sh up.sh
```

Check the logs if everthing went well (give it time...):

```
>> sh logs.sh
[...]
nginx  | /docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
nginx  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
nginx  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
nginx  | /docker-entrypoint.sh: Configuration complete; ready for start up
```

# First configurations of KeyCloak (26.0)

Login under:
```
https://FQDN/sso
e.g.
https://psintern.neuro.uni-bremen.de/sso
```
The password is the one you put in /docker/compose/keycloakserver/.env at KEYCLOAK_ADMIN_PASSWORD.

![First login](keycloak_images/001.png)


