var UploadController = {
	Upload: function(req, res, next){
		console.log(req.files.file);	
	}
};

//HomeController.post('/upload', function(req, res) {
  //console.log(req.files.file); // the uploaded file object
//});

module.exports= UploadController;