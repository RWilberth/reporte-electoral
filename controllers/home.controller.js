
var HomeController = {
	Index: function(req, res, next){
		var title = 'Reportes electorales';
		return res.render('home/index', { title:title });	
	}
};

//HomeController.post('/upload', function(req, res) {
  //console.log(req.files.file); // the uploaded file object
//});

module.exports= HomeController;