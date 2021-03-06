'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
	entry: {
		SwipeToDeleteView: [path.resolve(__dirname, 'src/js/main')]
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		library: '[name]',
		libraryTarget: 'umd',
		filename: 'swipe-to-delete.js'
	},

	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	externals: {
		'jquery': {
			root: '$',
			commonjs: 'jquery',
			commonjs2: 'jquery',
			amd: 'jquery'
		},
		'underscore': {
			root: '_',
			commonjs: 'underscore',
			commonjs2: 'underscore',
			amd: 'underscore'
		},
		'backbone': {
			root: 'Backbone',
			commonjs: 'backbone',
			commonjs2: 'backbone',
			amd: 'backbone'
		},
		'backbone.marionette': {
			root: 'Marionette',
			commonjs: 'backbone.marionette',
			commonjs2: 'backbone.marionette',
			amd: 'backbone.marionette'
		}
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass?indentType=tab&indentWidth=1')
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('swipe-to-delete.css')
	]
};

module.exports = config;
