# Assumptions

1. You system is docker ready.
2. You have a working DNS entry and you have non-selfsigned SSL certificates
3. We assume that a ufw firewall is used. And port 443 is open.
```
ufw allow 3000
```

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

---

The password is the one you put in /docker/compose/keycloakserver/.env at KEYCLOAK_ADMIN_PASSWORD.

![First login](keycloak_images/001.png)

---

We switch to login with email (If you allow password recovery via "Forgot password" is your decision): 
![Switch to email login](keycloak_images/002.png)

## Create your own admin user and replace the temporary one

Create a new user

![Create a new user](keycloak_images/003.png)

---

Fill in the user details

![user details](keycloak_images/004.png)

---

Set the password

![new password a](keycloak_images/005.png)

---

![new password b](keycloak_images/006.png)

---

![new password c](keycloak_images/007.png)

---

Elevate the user to admin status

![made admin a](keycloak_images/008.png)

---

![made admin b](keycloak_images/009.png)

---

![made admin c](keycloak_images/010.png)

---

**Later** (!!!!) when everything is working as intended, delete the temporary admin user

![remove old admin](keycloak_images/011.png)

---

Log out as admin and login with your new admin user

![admin logout](keycloak_images/012.png)

---

![new admin login](keycloak_images/013.png)

## Set the email server parameter of keycloak

Obviously use your own values: 

![email a](keycloak_images/014.png)

---

![email b](keycloak_images/015.png)

---

Test if the email is working:

![email test](keycloak_images/016.png)

## Configure the event logging

Event listeners

![event a](keycloak_images/017.png)

---

![event b](keycloak_images/018.png)

---

User events settings

![event c](keycloak_images/019.png)

---

Admin events settings

![event d](keycloak_images/020.png)

## Localization

![localization a](keycloak_images/021.png)

---

![localization b](keycloak_images/022.png)

# Creating the overleaf client in Keycloak and test it

Create a new keycloak client for overleaf

![client a](keycloak_images/023.png)

---

Name it overleaf

![client b](keycloak_images/024.png)

---

Activate "Client authentication"

![client c](keycloak_images/025.png)

---

The callback url is required. We will use the test tool url first and replace it later. The test tool helps to find a potential problem easier. 

![client d](keycloak_images/026.png)

---

Now get the secret of the overleaf client

![client e](keycloak_images/027.png)

---

![client f](keycloak_images/028.png)


## Setting up and using the test tool in /docker/develop/test_keycloak_overleaf_client

This might seem as a waste of time but I will spare a lot of tears.

* Go to /docker/develop/test_keycloak_overleaf_client
* Build the test container
```
>> sh make_image.sh
```
* Modifiy get_info.sh such that those values are correct (you remember the secret from the overleaf client a few moments ago?):
  - FQDN="psintern.neuro.uni-bremen.de"
  - OIDC_CLIENT_ID=overleaf
  - OIDC_CLIENT_SECRET=REDACTED
* run get_info.sh
```
>> sh get_info.sh
```
* start the container
```
>> sh up.sh
```

* We check the logs if everthing is file:

```
>> sh logs.sh
nodedev  | > node app.js
nodedev  | 
nodedev  | Server running on port 3000
nodedev  | Keycloak OpenID Connect Test Application
nodedev  | Base Path: /nodedev
nodedev  | Callback URL: https://FQDN/nodedev/login/callback
```

* We open the firewall (port 3000)

```
>> sh open_firewall.sh
```

* Reconfigure nginx
  - go to /docker/compose/nginx and change the config to nginx_b.conf
```
>> sh down.sh
>> cp nginx_b.conf nginx.conf
>> sh up.sh
```
* Check the logs if it is ready
```
>> sh logs.sh
nginx  | 10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
nginx  | /docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
nginx  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
nginx  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
nginx  | /docker-entrypoint.sh: Configuration complete; ready for start up
```
* Use a web browser to surf to https://FQDN/nodedev/
  
![test a](keycloak_images/029.png)

---

![test b](keycloak_images/30.png)

* Go to /docker/develop/test_keycloak_overleaf_client and check the log file
```
>> sh logs.sh
nodedev  | 172.20.0.1 - - [07/Dec/2024:23:44:01 +0000] "GET /nodedev/profile HTTP/1.0" 304 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
nodedev  | Deserializing user: {
nodedev  |   id: '00f32e59-be6e-435b-9f1a-6312c1cbcd19',
nodedev  |   displayName: 'David Rotermund',
nodedev  |   username: 'davrot@uni-bremen.de',
nodedev  |   name: { familyName: 'Rotermund', givenName: 'David' },
nodedev  |   emails: [ { value: 'davrot@uni-bremen.de' } ]
nodedev  | }
nodedev  | 172.20.0.1 - - [07/Dec/2024:23:44:35 +0000] "GET /nodedev/ HTTP/1.0" 200 183 "https://psintern.neuro.uni-bremen.de/nodedev/profile" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
```

* If there is no error we can disable the test program.
* Go to /docker/develop/test_keycloak_overleaf_client and stop the test container
```
>> sh down.sh
```

* Run this twice to remove the open ports (IPv4 and IPv6) and answer with y
```
>> ufw status numbered | grep 3000 | head -1 | sed s/'\['/''/g | sed s/'\]'/''/g | awk -c {'print "ufw delete " $1'} > close_firewall_todo.sh
>> sh close_firewall_todo.sh
```

* Clean up the proxy config in /docker/compose/nginx

```
>> sh down.sh
>> cp nginx_a.conf nginx.conf
>> sh up.sh
```

