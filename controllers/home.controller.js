
var HomeController = {
	Index: function(req, res, next){
		var title = 'Reportes electorales';
		return res.render('home/index', { title:title });	
	},
	ImportFile: function(req, res, next){
		console.log(req.file.originalname);
		res.json({
        message: 'File uploaded successfully',
      });
	}
};

//HomeController.post('/upload', function(req, res) {
  //console.log(req.files.file); // the uploaded file object
//});

module.exports= HomeController;