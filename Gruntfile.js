module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      options: {
        includePaths: ['assets/css']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'assets/css/screen.css': 'assets/css/screen.scss',
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'assets/**/*.scss',
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'watch']);
}