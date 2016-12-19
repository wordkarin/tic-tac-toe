import Backbone from 'backbone';
import Board from 'app/models/board';

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    // var boardArray = [];
  },

  render: function() {
    const boardTable = this.$('#board-display');
    // boardTable.empty();

    var row1 =

    // reattach dom even listeners to our brand spanking new HTML
    this.delegateEvents();

    return this;
  },


  events: {
    'click li': 'markPosition'
  },

  markPosition: function(event) {
    console.log(event.currentTarget.id);
    console.log('markPosition called');
  }

});

export default BoardView;
