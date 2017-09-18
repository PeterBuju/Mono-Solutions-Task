//grunt/config/wiredep.js

module.exports = { 
	devinit: {
	  //directory: 'app/bower_components',
	  //bowerJson: 'bower.json',
	  src: [
	    'dist/index.html',   // .html support...
	    'dist/index_process.html'   // .html support...
	  ],
	  ignorePath: '../app/',
	  options: {
	    //devDependencies: true
	  },
	  exclude: [
	  'bower_components/datatables/media/js/jquery.dataTables.js',
	  'bower_components/datatables/media/css/jquery.dataTables.css'

	  ],
	  onError: function(err){
	    console.log("wiredep error:" + err.code);
	  },
	  onFileUpdated: function(filePath){
	    console.log("wiredep file updated:" + filePath);
	  }
	},

	changedFiles:{
		src: ''
	}
};