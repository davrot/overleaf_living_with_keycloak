docker exec -it keycloakpostgres bash -c "pg_dump -U keycloakuser -d keycloak -F c -f /backup/backup.sql"
