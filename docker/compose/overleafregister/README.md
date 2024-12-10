First of all, build the docker image: 

```
>> sh make_image.sh
```

* Build the docker image with make_image.sh
* In data you need to edit the following files:
  * allowed_domains.json: This allows to configure domains endings (like uni-bremen.de which allows davrot@uni-bremen.de and davrot@neuro.uni-bremen.de) that are automatically allowed even if the person is not invited.
  * blocked_users.json: Here you can name email addresses you want to block.
  * config.json: Here you need to adapt the FQDNs and the two passwords:
```
{
    "keycloak_url": "https://overleaf.fb1.uni-bremen.de/sso",
    "keycloak_login": "https://overleaf.pip.uni-bremen.de/login/oidc",
    "admin_username": "automation@non.no",
    "admin_password": "REDACTED",
    "client_id": "admin-cli",
    "client_secret": "REDACTED"
}
```
 * Set a secret key in data/secret_key.json. 
  
* In data/main.py: (pip install captcha flask email_validator pymongo)
  * I simplied the captcha to 6x A . If you want something else change line 34.
  * I am not using the generated captcha_image in the webpage. I thing modern machine learning makes no difference if it is a image or a text. I am using the captcha just to block simple bots. They cannot create an account anyhow. But if you want to, you can add it back to in templates/post.html in by using the "image"
```
<img src="data:image/png;base64,{{ captcha_image }}" alt="CAPTCHA">
```
  * Change keycloak_url to your installation

* And finally change the logos in data/static and the text in templates/post.html

Start the container with:

```
>> sh up.sh
```

Or for development activate the 
```
entrypoint: ["sh", "-c", "sleep infinity"]
```
in the compose.yaml. Then enter the container with 
```
>> sh exec.sh
```
Inside the container you can use
```
>> cd data
>> sh run.sh
```
to start the server. Every change in the code, html file or logos requires run.sh to be stopped and started again!




