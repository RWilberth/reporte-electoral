var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/home.controller');

var UploadController = require('../controllers/upload.controller');
/* GET home page. */
router.get('/', HomeController.Index);

router.post('/upload', UploadController.Upload);

module.exports = router;