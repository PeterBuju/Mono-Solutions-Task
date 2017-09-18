//grunt/config/concurrent.js

module.exports = { 
	target1: ['jshint: changedFiles', 'copy:changedFiles'],
	target2: ['shell']
};