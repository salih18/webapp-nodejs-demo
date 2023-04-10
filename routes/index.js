const express = require('express');
const router = express.Router();

let pageOpt = {
  title: process.env.APP_NAME || 'Express',
  backgroundColor: process.env.BACKGROUND_COLOR || 'blue',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageOpt: pageOpt });
  
});

module.exports = router;
