module.exports = function (grunt) {
    'use strict';

    function scssRenamer(dest, src) {
        return dest + '/' + src.replace(/\.scss$/, '.css');
    }

    grunt.initConfig({
        reactTemplates: {
            format: 'stylish',
            modules: 'amd',
            src: ['scripts/**/*.rt']
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['style/main.scss'],
                    dest: 'cssCache',
                    rename: scssRenamer
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-react-templates');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['rt', 'sass']);
    grunt.registerTask('rt', ['react-templates']);
    grunt.registerTask('scss', ['sass']);
};
