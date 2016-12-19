import Backbone from 'backbone';
import Board from 'app/models/board';

const BoardView = Backbone.View.extend({
  initialize: function(options) {

  },

  render: function() {

    return this;
  },


  events: {
    'click #0': 'markPosition';
  },

  markPosition: function(event) {
    console.log('markPosition called');
  }

});

export default BoardView;
