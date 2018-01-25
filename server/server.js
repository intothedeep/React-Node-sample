const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// app.use(express.static(path.join(__dirname, "app/build")));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../app/build/index.html"));
});

const PORT = process.env.PORT || 80;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log("dir == " + __dirname);
  console.log(`Server listening on port ${PORT}`);
  console.log(typeof server);
});
