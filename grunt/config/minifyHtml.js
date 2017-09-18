//grunt/config/minifyhtml.js

module.exports = { 
	options: {
		cdata: true
	},
	index: {
		files: {
			'dist/index.html' : 'dist/index.html'
		}
	},

	views: {
		files: [
			{
			  expand: true,     // Enable dynamic expansion.
			  cwd: 'app/views/',      // Src matches are relative to this path.
			  src: ['**/*.html', '!templates/**/*.html'], // Actual pattern(s) to match.
			  dest: 'dist/views/'   // Destination path prefix.
			}
		]
	}
};