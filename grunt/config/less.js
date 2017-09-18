//grunt/config/less.js

module.exports = { 
	toTemp: {
		src: ['app/assets/less/*.less', '!app/assets/less/icons/*.less'],
		dest: 'app/temp/mystyle.css',
		options: {
			compress: true
		}
	},

	all: {
		src: ['app/assets/less/*.less', 'app/components/**/*.less', '!app/assets/less/icons/*.less'],
		dest: 'dist/assets/css/mystyle.css',
		options: {
			compress: true
		}
	},
	changedFiles: {
		src: 'default',
		dest: 'default',
	}
};