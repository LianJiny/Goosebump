module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
        server: {
            options: {
                port: 9009,
                base: './',
                keepalive: true
            }
        }
    },
    open: {
        all: {
            // Gets the port from the connect configuration
            path: 'http://localhost:9009/index.html'
        }
    }
  });

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect', 'open']);
};