#!/usr/bin/env sh

echo 'bundle app for release'

set -x
npm run build
set +x

echo 'start the release build'

set -x
npm run preview &
sleep 1
echo $! > .pidfile
set +x


echo 'Visit http://localhost:4173 to see your Node.js/React application in action.'
