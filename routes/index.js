var express = require('express');
var router = express.Router();
var https = require('https');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home Automation' });
});

router.get('/api/cars', function(req, res){
	https.get("https://www.car2go.com/api/v2.1/vehicles?loc=amsterdam&oauth_consumer_key=CMDrive&format=json", function(http_res) {
	var body = '';

	http_res.on('data', function(data) {
	  body += data;
	});
	http_res.on('end', function() {
	  res.send(JSON.parse(body).placemarks);
	});
	}).on('error', function(e) {
	console.log("Got error: " + e.message);
	});
});

/* GET templates */
router.get('/views/*', function(req, res) {
  res.render(req.path.replace('/views/', ''));
});

module.exports = router;
