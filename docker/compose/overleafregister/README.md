* Build the docker image with make_image.sh
* In data you need to edit the following files:
  * allowed_domains.json:
  
* In data/main.py: (pip install captcha flask)
  * I simplied the captcha to 6x A . If you want something else change line 34.
  * I am not using the generated captcha_image in the webpage. I thing modern machine learning makes no difference if it is a image or a text. I am using the captcha just to block simple bots. They cannot create an account anyhow. But if you want to, you can add it back in by using the "image"
```
{{ captcha_image }}
```
  * Change keycloak_url to your installation
Set a secret key in tools/secret_key.json. 
