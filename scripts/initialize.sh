#!/bin/bash
cd /home/ubuntu/take-care-of-my-closet/server
npm install
npm install pm2@latest -g
sudo apt-get update
sudo apt-get install authbind
sudo touch /etc/authbind/byport/4000
sudo chown ubuntu /etc/authbind/byport/4000
sudo chmod 755 /etc/authbind/byport/4000