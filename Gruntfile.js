
module.exports = function (grunt) {
    'use strict';
    
    var pkg                            = grunt.file.readJSON('package.json');
    
    
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-connect');
   
    var tasks = {
        MAIN_LESS_FILE: 'styles/main.less',
        MAIN_CSS_FILE: 'styles/main.css',

        less: {
            dev: {
                files: {
                  '<%= MAIN_CSS_FILE %>': '<%= MAIN_LESS_FILE %>'
                }
            }

            // prod: {
            //     options: {
            //         compress: true,
            //         cleancss: true
            //     },
            //     files: {
            //         '<%= MAIN_CSS_FILE %>': '<%= MAIN_LESS_FILE =>'
            //     }
            // }
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

        connect: {
            serve: {
                options: {
                    open: true,
                    livereload: true,
                    hostname: 'localhost',
                    port: 8626,
                    base: '.',
                    keepalive: true
                }
            }
        },
    };

    grunt.initConfig(tasks);

    // grunt.registerTask('default',           'Compiles your less, and watches for future changes.',
    //                                         function()
    //                                         {
    //                                             grunt.task.run(['less:dev', 'connect']);
    //                                         });

    grunt.registerTask('default', 'Comipiles your LESS to CSS',
                        function()
                        {
                            grunt.task.run('less:dev');
                        });
};