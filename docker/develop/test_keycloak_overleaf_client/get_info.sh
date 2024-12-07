FQDN="psintern.neuro.uni-bremen.de"
OIDC_CLIENT_ID=overleaf
OIDC_CLIENT_SECRET=REDACTED

# ##################################################

PORT=3000
SESSION_SECRET=$(openssl rand -hex 32)

URL=https://${FQDN}/sso/realms/master/.well-known/openid-configuration
OIDC_CALLBACK_URL=https://${FQDN}/nodev/login/callback

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

echo "# Keycloak OpenID Connect Configuration" > data/.env
echo "OIDC_ISSUER=${OIDC_ISSUER}" >> data/.env
echo "OIDC_AUTHORIZATION_URL=${OIDC_AUTHORIZATION_URL}" >> data/.env
echo "OIDC_TOKEN_URL=${OIDC_TOKEN_URL}" >> data/.env
echo "OIDC_USERINFO_URL=${OIDC_USERINFO_URL}" >> data/.env
echo "OIDC_CLIENT_ID=${OIDC_CLIENT_ID}" >> data/.env
echo "OIDC_CLIENT_SECRET=${OIDC_CLIENT_SECRET}" >> data/.env
echo "OIDC_CALLBACK_URL=${OIDC_CALLBACK_URL}" >> data/.env
echo "" >> data/.env
echo "# Session Secret (used to sign the session ID cookie)" >> data/.env
echo "SESSION_SECRET=${SESSION_SECRET}" >> data/.env
echo "" >> data/.env
echo "# Port (optional)" >> data/.env
echo "PORT=3000" >> data/.env

rm openid-configuration


