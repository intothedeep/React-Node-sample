var express = require('express');
var cors = require('cors');
var apiController = require('../controllers/apiController');
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
router.get('/', cors(corsOptions), apiController.list);
router.get('/article', cors(corsOptions), apiController.article);

module.exports = router;
