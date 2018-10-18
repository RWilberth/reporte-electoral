
var HomeController = {
	Index: function(req, res, next){
		var title = 'Reportes electorales';
		return res.render('home/index', { title:title });	
	}
};

module.exports= HomeController;