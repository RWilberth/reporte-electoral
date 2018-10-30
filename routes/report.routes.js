var express = require('express');
var router = express.Router();
var ReportController = require('../controllers/report.controller');

router.get('/', ReportController.Index);


module.exports = router;