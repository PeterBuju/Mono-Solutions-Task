//grunt/config/copy.js

module.exports = { 
	all: {
	  expand: true, 
	  cwd: 'app/', 
	  src: [ '**/*.html', 
	  'components/**/*.js', 'shared/**/*.js',

	  'views/**/*.js', 'app.js', 'fccpVersion.js', 'assets/js/**/*.js', 

	  'assets/css/**/*.css',
	  'languages/**/*.json',

	  '**/*.jpg', 'assets/images/**/*.png', 'assets/images/**/*.ico', 'assets/fonts/**.*',
	  'assets/images/*.svg', 'assets/images/**/*.gif',
	  'assets/css/bootstrap.min.css',
	  '!bower_components/**/*', 'bower_components/**/*.js', 'bower_components/**/*.css', 
	  'bower_components/font-awesome/fonts/**.*', 'bower_components/angular-tree-control/images/*.png',
	  'bower_components/summernote/dist/font/**.*', 'bower_components/datatables/media/images/*.png',
	  'bower_components/bootstrap/dist/fonts/*.woff', 'bower_components/bootstrap/dist/fonts/*.woff2', 'bower_components/bootstrap/dist/fonts/*.ttf',

	  'manifest.webmanifest'], 
	  dest: 'dist/'},
	changedFiles: {
	    expand: true,
	    dot: true,
	    cwd: 'app/',
	    src: ['**/*.*'],
	    dest: 'dist/'
	},

	lib: {
		expand: true,
		dot: true,
		cwd: 'app/temp/lib/',
		src: ['**/**.*', '!**.css'],
		dest: 'dist/lib/'
	},

	fonts:{
		expand: true,
		dot: true,
		cwd: 'app/assets/',
		src: [
		'fonts/fontawesome-webfont.woff2',
		'fonts/fontawesome-webfont.woff',
		'fonts/fontawesome-webfont.ttf',
		'fonts/themify.ttf',
		'fonts/themify.woff',
		'fonts/ionicons.ttf',
		'fonts/ionicons.woff',
		'fonts/glyphicons-halflings-regular.woff',
		'fonts/glyphicons-halflings-regular.woff2',
		'fonts/glyphicons-halflings-regular.ttf',

		],
		dest: 'dist/'
	},

	images: {
		expand: true,
		dot: true,
		cwd: 'app/bower_components/angular-tree-control/',
		//
		src: [
		'images/node-closed-2.png',
		'images/node-opened-2.png',
		],
		dest: 'dist/'
	},

	html: {
		expand: true,
		dot: true,
		cwd: 'app/',
		src: [
		'views/**/*.html',
		],
		dest: 'dist/'
	},

	// HTML that was not minified
	restOfViews: {
		expand: true,
		dot: true,
		cwd: 'app/',
		src: [
		'views/templates/**/*.html',
		],
		dest: 'dist/'

	},

	imagemin: {
		expand: true,
		cwd: 'app/',
		src: ['assets/images/**/*.{png,jpg,gif,svg,ico}'],
		dest: 'dist/'
	}
};