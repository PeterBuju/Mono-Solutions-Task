//grunt/config/htmlhint.js

module.exports = { 

    all: {
        options: {
            'tag-pair': true
        },
    	src: ['app/index.html', 'app/views/**/*.html']
    },

    changedFiles: {

    }
};