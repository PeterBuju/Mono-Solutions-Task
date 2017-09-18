//grunt/config/prettify.js

module.exports = { 
	options: {
		indent: 1,
		indent_char: '	'
	},
	experimenthtml: {
		expand: true,
		cwd: 'app/',
		ext: '.pretty.html',
		src: ['index.html'],
		dest: 'app/'
	},

	all: {
		expand: true,
		cwd: 'app/',
		ext: '.html',
		src: ['index.html', 'views/**/*.html'],
		dest: 'app/'
	}
};