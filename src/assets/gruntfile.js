module.exports = function (grunt) {
    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'home.html', dest: 'assets/css/demo6.css' },
                    { src: 'home.html', dest: 'assets/css/demo6.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'assets/css/demo6.css', dest: 'assets/css/demo6miniii.css' }
                ]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks
    grunt.registerTask('default', ['uncss', 'cssmin']);
};