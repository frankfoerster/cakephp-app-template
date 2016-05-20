define(function(require) {

  var Marionette = require('marionette');

  /**
   * @class FlashComponent
   * @extends {Marionette.View}
   */
  var FlashComponent = Marionette.View.extend({
    template: false,

    ui: {
      dismissBtn: '.dismiss-flash'
    },

    events: {
      'click @ui.dismissBtn': 'dismiss'
    },

    dismiss: function(event) {
      event.preventDefault();

      this.$el.addClass('flash-message--dismissing').slideUp();
    }
  });

  return FlashComponent;
});
