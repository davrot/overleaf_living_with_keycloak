NOT FINISHED YET

If the user logs in via scp (in the moment on port 993, please don't forget to allow port 993 via ufw allow 993), a package list with the HajTex documents for that user is generated. ssh is blocked. 

Every 5 minutes, the user data base of HajTex is checked and new user in the database are created. 

# Create the client in keycloak:

```
urn:ietf:wg:oauth:2.0:oob
```

![A](01.png)

---

![B](02.png)

---

![C](03.png)

---


# Update config.yaml

```
clientsecret = "REDACTED"
```

# Create image:

```
>> make_image.sh
```

# Make automation@non.no an HajTex admin

First login once in HajTex with this user then we elevate the user to admin status:

```
>> cd /docker/compose/check_users
>> sh exec_make_admin.sh automation@non.no
```
