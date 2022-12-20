FROM mongo
COPY users.json /docker-entrypoint-initdb.d/
COPY 1import.sh /docker-entrypoint-initdb.d/
COPY 2createIndex.js /docker-entrypoint-initdb.d/