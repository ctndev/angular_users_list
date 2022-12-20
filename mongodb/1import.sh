#! /bin/bash
mongoimport --db ctnusers --collection users --file /docker-entrypoint-initdb.d/users.json --jsonArray