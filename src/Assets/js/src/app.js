define(function (require) {

  var $ = require('jquery');
  var FlashMessage = require('./components/FlashMessage');

  function _initComponents() {
    $('.flash-message').each(function() {
      new FlashMessage({el: this});
    });
  }

  function _initModules() {

  }

  return {
    /**
     * app options
     * that have been supplied through the layout default.ctp .
     *
     * @type {Object}
     */
    options: {},

    /**
     * Initialize the app.
     *
     * @param {Object} options
     */
    init: function (options) {
      this.options = options || {};

      _initComponents.call(this);
      _initModules.call(this);

      if (DEBUG !== false) {
        console.info('App initialized.');
      }
    }
  };

});
