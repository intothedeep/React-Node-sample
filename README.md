# React-Node-sample
Simple React app on Node server

Guide!

Assume that you installed node.js and create-react-app globally, and you know you can write node server.js.

React-Node-sample

- app
  - node_modules
  - build <<
    - ..
  - public
    - ..
  - src
    - ...
  - package.json

- server
  - node_modules
  - build <<
  - server.js
  - package.json
  
This is a  structure you will have at the end.

- run commands below
  - cd app
  - yarn install
  - yarn build
  - cd..
  - cd server
  - yarn install

- copy ./app/build folder into server folder.
- run node server.js

- check localhost:80/
- you will see basic react app running on your node server.

*you can use gulp or webpack to build automatic building system. later~
