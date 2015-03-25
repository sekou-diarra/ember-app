module.exports= function(grunt){
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
  concat: {
    options: {
      separator: ';'
    },
    dist: {
      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
      dest: 'dist/built.js'
    }
  },

  jshint: {

options: {
    reporter: require('jshint-stylish'),
  jshintrc:true
},

    all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js','config/*.js','Brocfile.js']
  },

  watch: {
  scripts: {
    files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js','config/*.js','Brocfile.js'],
    tasks: ['default'],
    options: {
      spawn: false,
    },
  },
}
});

	

  grunt.registerTask('default', ['jshint']);
};
