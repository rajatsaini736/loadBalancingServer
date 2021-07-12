var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/server', (req, res) => {
  setTimeout(() => {
    console.log('Time consuming task');
    res.send('server 1 is serving');
  }, 5000);
});

module.exports = router;
