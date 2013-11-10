/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      target: {
        rjsConfig: 'public/js/config.js'
      }
    },
    recess: {
      options: {
        compile: true
      },
      bootstrap: {
        src: ['less/mybootstrap3.less'],
        dest: 'public/css/mybootstrap3.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['less/mybootstrap3.less'],
        dest: 'public/css/mybootstrap3.min.css'
      },
      theme: {
        src: ['public/js/vendor/bootstrap/less/theme.less'],
        dest: 'public/css/mybootstrap3-theme.css'
      },
      theme_min: {
        options: {
          compress: true
        },
        src: ['public/js/vendor/bootstrap/less/theme.less'],
        dest: 'public/css/mybootstrap3-theme.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-recess');

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // Default task.
  grunt.registerTask('default', ['bower']);
};