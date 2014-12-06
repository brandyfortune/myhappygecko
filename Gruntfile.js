
module.exports = function (grunt) {
    'use strict';
    
    var pkg                            = grunt.file.readJSON('package.json');
    
    
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-express');
   
    var tasks = {
        MAIN_LESS_FILE: 'styles/main.less',
        MAIN_CSS_FILE: 'styles/main.css',

        less: {
            dev: {
                files: {
                  '<%= MAIN_CSS_FILE %>': '<%= MAIN_LESS_FILE %>'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },

            dev: {
                files: '<%= MAIN_LESS_FILE %>',
                tasks: 'less:dev'
            }
        },

        express: {
            localServer:
            {
                options:
                {
                    port: 8626,
                    bases: './',
                    debug: true,
                    open: true
                }
            }
        },
    };

    grunt.initConfig(tasks);

    grunt.registerTask('default', 'Comipiles your LESS to CSS',
                        ['less', 
                            'express', 
                            'express-keepalive', 
                            'watch']);
};