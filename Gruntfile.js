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
          '.build/Assets/css/app.css': 'src/Assets/less/app.less'
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
          '.build/Assets/css/app.min.css': '.build/Assets/css/app.css'
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
          dir: '.build/Assets/js/',

          // Load the RequireJS config() definition from the config.js file.
          // Otherwise, we'd have to redefine all of our paths again here.
          mainConfigFile: 'src/Assets/js/src/common.js',
          findNestedDependencies: true,

          fileExclusionRegExp: /^\.|\.md$|^LICENSE$|\.json$|^src$|\.map$|^demo$|^test$|^tests$|\.TXT$|\.txt$|^fonts$|^css$|\.css$|^less$|\.less$|^grunt$|\.sh$|^r.js$/,

          // Define the modules to compile.
          modules: [
            {
              name: 'app'
            }
          ],

          // Minify all js files via uglify2 and set DEBUG to false during the build.
          // This way you can use statements like:
          //      if (DEBUG) {
          //        console.log('foobar')
          //      }
          // during development (Configure::write('debug', true))
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
    uglify: {
      requirejs: {
        files: [
          {src: 'src/Assets/js/vendor/requirejs/require.js', dest: '.build/Assets/js/require.js'}
        ]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['.build/Assets/js/require.js', '.build/Assets/js/app.js'],
        dest: '.build/Assets/js/build.js'
      }
    },
    copy: {
      js: {
        files: [
          {src: '.build/Assets/js/build.js', dest: 'webroot/js/app.js'}
        ]
      },
      css: {
        files: [
          {src: '.build/Assets/css/app.min.css', dest: 'webroot/css/app.min.css'},
          {src: '.build/Assets/css/app.css', dest: 'webroot/css/app.css'},
          {src: '.build/Assets/css/app.css.map', dest: 'webroot/css/app.css.map'}
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
    'uglify:requirejs',
    'concat:js',
    'copy:js',
    'copy:css'
  ]);

  grunt.registerTask('watch-less', [
    'watch:less'
  ]);
};
