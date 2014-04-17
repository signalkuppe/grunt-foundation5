module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'html-builder': {

    },
    compass: {
      dist: {
        options: {
          config: 'src/scss/config.rb'
        }
      }
    },
    connect: {
       server: {
          options: {
              port: 8080,
              base: './dist'
          }
       }
    },
    clean: ['./dist'],
    copy: {
      client: {
         files: [
                  {expand: true, cwd: 'src/client/', src: ['**'], dest: 'dist/'}
         ],
      }
    },
    watch: {
        files: ['src/**/*.html','src/**/*.js','src/scss/**/*.scss'],
        tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-html-builder');
  grunt.loadNpmTasks('grunt-contrib-compass');


  grunt.registerTask('default', ['html-builder','compass','copy']);
  grunt.registerTask('listen', ['connect','watch']);
}