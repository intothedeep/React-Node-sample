var express = require('express');
var cors = require('cors');
var router = express.Router();

var whitelist = ['*'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};


router.options('*', cors(corsOptions));
router.get('/', cors(corsOptions), (req, res) => {
  res.send({ status : "ok!" });
});

router.get('/article', cors(corsOptions), (req, res) => {
  res.status(200).send({ messege : "This is a article!" });
});

module.exports = router;
