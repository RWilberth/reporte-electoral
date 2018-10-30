let webpack = require('webpack');
let path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
//const nodeExternals = require('webpack-node-externals');

module.exports = {
	//externals: [nodeExternals()],
	entry: './src/app.js',
	output: {
		path: __dirname + '/public/javascripts',
		filename: 'bundle.js',
	},
	module: {
		rules: [
		{
			test: /\.js$/,
        	exclude: [/bower_components/, /node_modules/],
        	use: {
          		loader: 'babel-loader'
        	}
		},
		{
        	test: /\.vue$/,
        	loader: 'vue-loader'
      	} 
		]
	},
	plugins: [
		new VueLoaderPlugin(),
	]
};