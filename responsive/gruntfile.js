module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    '_/js/script.js': ['_/components/js/script.js']
                }
            }
        }, //uglify
        compass: {
            dev: {
                config:'config.rb'
            }
        },//compass
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            },
            html: {
                files: ['*.html']
            },
            sass:{
                files:['_/components/sass/*.scss'],
                tasks:['compass:dev']
            }
        } //watch
    }); //initConfig
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default', ['watch']);
};