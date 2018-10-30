var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage(
    {
        destination: './public/kml',
        filename: function ( req, file, cb ) {
            //req.body is empty... here is where req.body.new_file_name doesn't exists
            cb( null, file.originalname );
        }
    }
);

var upload = multer({ storage: storage });

var HomeController = require('../controllers/home.controller');

//var UploadController = require('../controllers/upload.controller');
/* GET home page. */

router.get('/', HomeController.Index);

router.post('/upload', upload.single('file'), HomeController.ImportFile)

module.exports = router;