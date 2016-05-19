module.exports = function(grunt) {
  "use strict";

  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    //-------------------------------------------- STYLE PROCESSING --------------------------------------------------//
    less: {
      frontend: {
        options: {
          sourceMap: true,
          sourceMapURL: 'app.css.map'
        },
        files: {
          'src/Assets/_build/css/app.css': 'src/Assets/less/frontend/app.less'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      default: {
        files: {
          'src/Assets/_build/css/app.min.css': 'src/Assets/_build/css/app.css'
        }
      }
    },

    //--------------------------------------------- JS PROCESSING -----------------------------------------------------//
    jshint: {
      default: [
        'package.json',
        'Gruntfile.js',
        'src/Assets/js/**/*.js'
      ]
    },
    requirejs: {
      app: {
        options: {
          // Define our base URL - all module paths are relative to this
          // base directory.
          baseUrl: 'src/Assets/js/src',

          // Define our build directory. All files in the base URL will be
          // COPIED OVER into the build directory as part of the
          // concatentation and optimization process.
          dir: 'src/Assets/_build/js/src/',

          // Load the RequireJS config() definition from the config.js file.
          // Otherwise, we'd have to redefine all of our paths again here.
          mainConfigFile: 'src/Assets/js/src/common.js',
          findNestedDependencies: true,

          fileExclusionRegExp: /^\.|\.md$|^LICENSE$|\.json$|^src$|\.map$|^demo$|^test$|^tests$|\.TXT$|\.txt$|^fonts$|^css$|\.css$|^less$|\.less$|^grunt$|\.sh$|^r.js$/,

          // Minify all js files via uglify2 and set DEBUG to false during the build.
          // This way you can use statements like:
          //      if (DEBUG) {
          //        console.log('foobar')
          //      }
          // during development (Configure::write('debug', 2))
          // which will be excluded from the build.
          optimize: 'uglify2',
          uglify2: {
            compress:{
              global_defs: {
                DEBUG: false
              }
            }
          }
        }
      }
    },
    copy: {
      js: {
        files: [
          {src: 'src/Assets/_build/js/app/app.js', dest: 'webroot/js/app.js'},
          {src: 'src/Assets/js/vendor/requirejs/require.js', dest: 'webroot/js/require.js'}
        ]
      },
      css: {
        files: [
          {src: 'src/Assets/_build/css/app.min.css', dest: 'webroot/css/app.min.css'},
          {src: 'src/Assets/_build/css/app.css', dest: 'webroot/css/app.css'},
          {src: 'src/Assets/_build/css/app.css.map', dest: 'webroot/css/app.css.map'}
        ]
      }
    },

    //----------------------------------------------- WATCHERS -------------------------------------------------------//
    watch: {
      less: {
        files: ['src/Assets/less/**/*.less'],
        tasks: ['less', 'cssmin', 'copy:css']
      }
    }

  });

  //--------------------------------------------- REGISTERED TASKS ---------------------------------------------------//
  grunt.registerTask('default', [
    'less',
    'cssmin',
    'jshint',
    'requirejs:app',
    'copy:js',
    'copy:css'
  ]);

  grunt.registerTask('watch-less', [
    'watch:less'
  ]);
};
