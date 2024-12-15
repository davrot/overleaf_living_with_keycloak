Don't forget to put the container checker into the crontab:

```
>> crontab -e
```

```
*/5 * * * * /bin/bash /docker/check_docker.sh
```
