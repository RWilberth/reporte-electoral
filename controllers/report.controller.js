var upload = require("express-fileupload");
var ReportController = {
	Index: function(req, res, next){
		var title = 'Reportes electorales';
		return res.render('report/index', { title:title });	
	}
	UploadTest: function(req, res, next){

	}
};

//HomeController.post('/upload', function(req, res) {
  //console.log(req.files.file); // the uploaded file object
//});

module.exports= ReportController;