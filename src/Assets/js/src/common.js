require.config({
  config: {
    moment: {
      noGlobal: true
    }
  },
  paths: {
    backbone: '../vendor/backbone/backbone',
    marionette: '../vendor/backbone.marionette/lib/backbone.marionette',
    jquery: '../vendor/jquery/dist/jquery',
    underscore: '../vendor/underscore/underscore'
  },
  packages: [
    {
      name: 'feature-detects',
      location: '../../../node_modules/modernizr/feature-detects'
    }
  ],
  shim: {
    backbone: [
      'underscore',
      'jquery'
    ],
    marionette: [
      'backbone'
    ]
  }
});

// removed in production by uglify
if (typeof DEBUG === 'undefined') {
  DEBUG = true;
}
