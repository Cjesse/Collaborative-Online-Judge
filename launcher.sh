#!/bin/bash
fuser -k 3000/tcp

service redis_6379 start
cd ./server
npm install
nodemon server.js &
cd ../client
npm install
ng build --watch

echo "============================="
read -p "PRESS [ENTER] TO TERMINATE PROCESS." PRESSKEY

fuser -k 3000/tcp
service redis_6379 stop