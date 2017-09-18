//grunt/config/strip_code.js

module.exports = { 
	options: {
		blocks: [
			{
				start_block: "<!--livereload-->",
				end_block: "<!--/livereload-->"
			}
		]
	},
	livereload: {
		files: [
			{
				src: 'app/index.html',
				dest: 'dist/index.html'
			}
		]
	}
};