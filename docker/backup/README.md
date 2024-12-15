In copy_keys_over.sh and make_keys.sh, you need to change the computer names to your installation (where your want to store your backup).

Don't forget to put it in your crontab

```
>> crontab -e
```

```
0 0 * * * /bin/bash /docker/backup/make_backup.sh
```
