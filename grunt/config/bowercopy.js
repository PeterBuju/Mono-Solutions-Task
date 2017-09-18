//grunt/config/less.js

module.exports = { 
	options: {
	    //clean: true	// Bower components folder will be removed afterwards 
	},
	toTemp: {

		options:{
			srcPrefix: "app/bower_components/",
			destPrefix: "app/temp/lib/"
		},
		files: {
		    // Target-specific file lists and/or options go here 
		    // Keys are destinations (prefixed with `options.destPrefix`) 
		    // Values are sources (prefixed with `options.srcPrefix`); One source per destination 
		    // e.g. 'chai/lib/chai.js' will be copied to 'test/js/libs/chai.js' 
		    // Js
		    'jquery.min.js': 'jquery/dist/jquery.min.js',

		    'jquery.dataTables.min.js': 'datatables.net/js/jquery.dataTables.min.js',
		    'dataTables.buttons.js': 'datatables.net-buttons/js/dataTables.buttons.js',
		    'buttons.colVis.js': 'datatables.net-buttons/js/buttons.colVis.js',
		    'buttons.flash.js': 'datatables.net-buttons/js/buttons.flash.js',
		    'buttons.html5.js': 'datatables.net-buttons/js/buttons.html5.js',
		    'buttons.print.js': 'datatables.net-buttons/js/buttons.print.js',
		    'dataTables.bootstrap.js': 'datatables.net-bs/js/dataTables.bootstrap.js',

		    'angular.min.js': 'angular/angular.min.js',

		    'angular-datatables.js': 'angular-datatables/dist/angular-datatables.min.js',

		    'angular-route.min.js': 'angular-route/angular-route.min.js',
		    'angular-loader.min.js': 'angular-loader/angular-loader.min.js',
		    'angular-mocks.js': 'angular-mocks/angular-mocks.js',
		    'bindonce.min.js': 'angular-bindonce/bindonce.min.js',
		    'ui-bootstrap-tpls.min.js': 'angular-bootstrap/ui-bootstrap-tpls.min.js',
		    'angular-animate.min.js': 'angular-animate/angular-animate.min.js',
		    'angular-websocket.min.js': 'angular-websocket/angular-websocket.min.js',
		    'd3.min.js': 'd3/d3.min.js',
		    'bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',
		    'angular-tree-control.js': 'angular-tree-control/angular-tree-control.js',
		    'angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js',
		    'jquery.knob.min.js': 'jquery-knob/dist/jquery.knob.min.js',
		    'bootstrap-sweetalert.min.js': 'bootstrap-sweetalert/dist/sweetalert.min.js',
		    'sweetalert.min.js': 'sweetalert/dist/sweetalert.min.js',
		    'ngsweetalert.min.js': 'ngsweetalert/sweetalert.min.js',
		    'ngstorage.min.js': 'ngstorage/ngstorage.min.js',
		    //'respond.min.js': 'respond/dest/respond.min.js',
		    //'tablesaw.js': 'filament-tablesaw/dist/tablesaw.js',
		    //'summernote.min.js': 'summernote/dist/summernote.min.js',
		    'jquery.bootstrap.wizard.min.js': 'twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js',

			'Blob.js': 'blob-polyfill/Blob.js',
			'FileSaver.js': 'file-saver.js/FileSaver.js',
		    'ui-ace.js': 'angular-ui-ace/ui-ace.js',
			'angular-file-saver.bundle.js': 'angular-file-saver/dist/angular-file-saver.bundle.js',
			'angular-clipboard.js': 'angular-clipboard/angular-clipboard.js',



		    //'target.js': 'folder/source.js',

		    // Css
		    'dataTables.bootstrap.css': 'datatables.net-bs/css/dataTables.bootstrap.css',

		    'bootstrap.min.css':'bootstrap/dist/css/bootstrap.min.css',
		    'bootstrap-theme.min.css':'bootstrap/dist/css/bootstrap-theme.min.css',
		    'tree-control.css':'angular-tree-control/css/tree-control.css',
		    'font-awesome.css':'font-awesome/css/font-awesome.css',
		    'sweetalert.css':'bootstrap-sweetalert/dist/sweetalert.css',
		    'sweetalert.css':'sweetalert/dist/sweetalert.css',
		    //'summernote.css':'summernote/dist/summernote.css',
		    //'tablesaw.css':'filament-tablesaw/dist/tablesaw.css',

		    'buttons.bootstrap.css':'datatables.net-buttons-bs/css/buttons.bootstrap.css',

		    // Fonts

		    //'font/summernote.ttf': 'summernote/dist/font/summernote.ttf',
		    //'font/summernote.woff': 'summernote/dist/font/summernote.woff',
		}
	}
};