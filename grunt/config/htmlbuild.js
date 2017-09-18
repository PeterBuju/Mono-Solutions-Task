//grunt/config/htmlbuild.js

module.exports = { 
	devinit: {
        src: 'dist/index.html',
        dest: 'dist/index.html',
        options: {
            allowUnknownTags: true,
            keepTags: true,
            beautify: true,
            scripts: {
                bundle: [
                    'dist/**/*.module.js',
                    'dist/**/*.js',
                    '!dist/**/jquery.app.js',
                    '!dist/**/*_test.js', 
                    '!dist/bower_components/**/*.js',
                    '!dist/app.js'
                ], 
                app: [ 
                    'dist/app.js',
                    'dist/**/jquery.app.js' 
                ]               
            },
            styles: {
                bundle: [
                'dist/assets/css/bootstrap.min.css',
                'dist/assets/css/mystyle.css'
                ]
            }
        }
    },

    changedFiles: {
    	src: 'default',
    	dest: 'default',
    },
    
    lib: {
        src: 'dist/index.html',
        dest: 'dist/index.html',
        options: {
            allowUnknownTags: true,
            keepTags: true,
            beautify: true,
            scripts: {
                bundle: [
                    'dist/lib/index.js', 'dist/lib/jquery.min.js',


                    'dist/lib/jquery.dataTables.min.js', 'dist/lib/dataTables.buttons.js', 'dist/lib/buttons.colVis.js', 
                    'dist/lib/buttons.flash.js', 'dist/lib/buttons.html5.js', 'dist/lib/buttons.print.js', 
                    'dist/lib/dataTables.bootstrap.js',

                    'dist/lib/angular.min.js', 

                    'dist/lib/angular-datatables.js',

                    'dist/lib/bootstrap.min.js',
                    

                    'dist/lib/*.js',


                    'dist/assets/js/*.js'


                ],
                app: []             
            },
            styles: {
                bundle: [
                    'dist/lib/lib.min.css',
                    'dist/assets/css/mystyle.min.css'
                ]
            }
        }
    },
};