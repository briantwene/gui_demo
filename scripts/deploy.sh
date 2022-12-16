#!/usr/bin/env sh

echo 'bundle app for release'

set -x
npm run build
set +x

echo 'start the release build'

set -x
npm start &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:4173 to see your Node.js/React application in action.'
echo '(This is why you specified the "args ''-p 3000:3000''" parameter when you'
echo 'created your initial Pipeline as a Jenkinsfile.)'