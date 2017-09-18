//grunt/config/imagemin.js

module.exports = { 
	all: {
        options: {
            optimizationLevel: 7
        },
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['assets/images/**/*.{png,jpg,gif,svg,ico}'],
            dest: 'dist/'
        }]
    }
    
};