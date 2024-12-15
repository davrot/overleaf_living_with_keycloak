FQDN="psintern.neuro.uni-bremen.de"

# KeyCloak
OIDC_CLIENT_ID=overleaf
OIDC_CLIENT_SECRET=REDACTED
OIDC_ENABLE=true
OIDC_NAME_SHORT="OIDC"
OIDC_NAME_LONG="OIDC"

# Email
OVERLEAF_EMAIL_PASSWORD=REDACTED
OVERLEAF_EMAIL_FROM_ADDRESS=overleaf@uni-bremen.de
OVERLEAF_EMAIL_SMTP_HOST=smtp.uni-bremen.de
OVERLEAF_EMAIL_SMTP_PORT=465
OVERLEAF_EMAIL_SMTP_SECURE=true
OVERLEAF_EMAIL_SMTP_USER=overleaf

# Other
OVERLEAF_APP_NAME="University of Bremen -- HajTex"
OVERLEAF_NAV_TITLE="Uni Bremen HajTex"
OVERLEAF_CUSTOM_EMAIL_FOOTER="University of Bremen -- HajTex"

# ##################################################

OVERLEAF_SITE_URL=https://${FQDN}
URL=https://${FQDN}/sso/realms/master/.well-known/openid-configuration
OIDC_CALLBACK_URL=https://${FQDN}/login/oidc/callback

echo ${URL}
wget -O openid-configuration ${URL}

echo OIDC_ISSUER
OIDC_ISSUER=$(cat openid-configuration | sed s/","/"\n"/g | grep \"issuer\" | sed s/'\":'/'\n'/g | grep https | sed s/'\"'/''/g)
echo $OIDC_ISSUER

echo OIDC_AUTHORIZATION_URL
OIDC_AUTHORIZATION_URL=$(cat openid-configuration | sed s/","/"\n"/g | grep ^\"authorization_endpoint\" | sed s/'\":'/'\n'/g | grep https | sed s/'\"'/''/g | head -1)
echo $OIDC_AUTHORIZATION_URL

echo OIDC_TOKEN_URL
OIDC_TOKEN_URL=$(cat openid-configuration | sed s/","/"\n"/g | grep ^\"token_endpoint\" | sed s/'\":'/'\n'/g | grep https | sed s/'\"'/''/g | head -1)
echo $OIDC_TOKEN_URL

echo OIDC_USERINFO_URL
OIDC_USERINFO_URL=$(cat openid-configuration | sed s/","/"\n"/g | grep ^\"userinfo_endpoint\" | sed s/'\":'/'\n'/g | grep https | sed s/'\"'/''/g | head -1)
echo $OIDC_USERINFO_URL

echo "# Keycloak OpenID Connect Configuration" > .env
echo "OIDC_ENABLE=${OIDC_ENABLE}" >> .env
echo "OIDC_NAME_SHORT=${OIDC_NAME_SHORT}" >> .env
echo "OIDC_NAME_LONG=${OIDC_NAME_LONG}" >> .env
echo "OIDC_ISSUER=${OIDC_ISSUER}" >> .env
echo "OIDC_AUTHORIZATION_URL=${OIDC_AUTHORIZATION_URL}" >> .env
echo "OIDC_TOKEN_URL=${OIDC_TOKEN_URL}" >> .env
echo "OIDC_USERINFO_URL=${OIDC_USERINFO_URL}" >> .env
echo "OIDC_CLIENT_ID=${OIDC_CLIENT_ID}" >> .env
echo "OIDC_CLIENT_SECRET=${OIDC_CLIENT_SECRET}" >> .env
echo "OIDC_CALLBACK_URL=${OIDC_CALLBACK_URL}" >> .env
rm openid-configuration
echo "" >> .env

echo "# eMail Account Configuration" >> .env
echo "OVERLEAF_EMAIL_PASSWORD=${OVERLEAF_EMAIL_PASSWORD}" >> .env
echo "OVERLEAF_EMAIL_FROM_ADDRESS=${OVERLEAF_EMAIL_FROM_ADDRESS}" >> .env
echo "OVERLEAF_EMAIL_SMTP_HOST=${OVERLEAF_EMAIL_SMTP_HOST}" >> .env
echo "OVERLEAF_EMAIL_SMTP_PORT=${OVERLEAF_EMAIL_SMTP_PORT}" >> .env
echo "OVERLEAF_EMAIL_SMTP_SECURE=${OVERLEAF_EMAIL_SMTP_SECURE}" >> .env
echo "OVERLEAF_EMAIL_SMTP_USER=${OVERLEAF_EMAIL_SMTP_USER}" >> .env
echo "" >> .env

echo "# Other Overleaf Configurations Configuration" >> .env
echo "OVERLEAF_SITE_URL=${OVERLEAF_SITE_URL}" >> .env
echo "OVERLEAF_ADMIN_EMAIL=${OVERLEAF_EMAIL_FROM_ADDRESS}" >> .env
echo "OVERLEAF_APP_NAME=\"${OVERLEAF_APP_NAME}\"" >> .env
echo "OVERLEAF_NAV_TITLE=\"${OVERLEAF_NAV_TITLE}\"" >> .env
echo "OVERLEAF_CUSTOM_EMAIL_FOOTER=\"${OVERLEAF_CUSTOM_EMAIL_FOOTER}\"" >> .env

