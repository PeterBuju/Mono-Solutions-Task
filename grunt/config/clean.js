//grunt/config/clean.js

module.exports = { 
	temp: {
		src: ['app/temp/**']
	},
	dist: {
		src: ['dist/**']
	},

	bower: {
		src: ['app/bower_components/**/**.*']
	},

	npm: {
		src: ['node_modules/**/**.*']
	}
};