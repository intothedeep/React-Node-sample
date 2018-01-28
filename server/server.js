const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');

const app = express();

// static folder
app.use(express.static(path.join(__dirname, "build")));

// routing
const api = require('./routes/api');
const index = require('./routes/index');
app.use('/', index);
app.use('/api', api);

//http server
const HTTP_PORT = process.env.PORT || 80;
const httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, () => {
  console.log("dir == " + __dirname);
  console.log(`HTTP Server listening on PORT ${HTTP_PORT}`);
  console.log(typeof httpServer);
});

// https server
const HTTPS_PORT = 443;
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const httpsServer = https.createServer(options, app);
httpsServer.listen(HTTPS_PORT, () => {
  console.log(`HTTPS server listening on PORT ${HTTPS_PORT}`);
});
