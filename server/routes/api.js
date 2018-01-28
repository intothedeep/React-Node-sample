var express = require('express');
var apiController = require('../controllers/apiController');
var router = express.Router();

var cors = require('cors');
// var whitelist = ['https://localhost:443', 'https://localhost:80'];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// };


// include before other routes
router.options('*', cors());

router.get('/', cors(), apiController.list);

router.get('/article', function (req, res) {
  res.status(200).send({ messege : "This is a article!" });
});

module.exports = router;
