var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/home.controller');
/* GET home page. */
router.get('/', HomeController.Index);

module.exports = router;