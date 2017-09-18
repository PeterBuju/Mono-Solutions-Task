//grunt/config/compress.js

module.exports = { 
  main: {
    options: {
      type: 'tgz',
      archive: 'website.tar.gz'
    },
    files: [
      {expand: true, cwd: 'dist/',  src: ['**/*'], dest: 'www/pages/', filter: 'isFile'}, // includes files in path
      ]
    }
};