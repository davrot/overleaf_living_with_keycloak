docker compose down
cd /docker/features
sh _tools/configure_features.sh
sh _tools/generate_prep.sh
cd /docker/compose/overleafserver
docker compose up -d

