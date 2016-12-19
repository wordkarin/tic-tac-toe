import Backbone from 'backbone';
import Board from 'app/models/board';

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    // this will actually come from the model, and not have anything in it at initialize.
    this.positions = ["X"," "," ","O"," "," "," "," "," "];
  },

  render: function() {
    const boardList = this.$('#board-display');
    boardList.empty();

    for(var i=0; i < this.positions.length; i++) {
      var square = "<li class='column' id='" + i + "'>" + this.positions[i] + "</li>";
      boardList.append(square);
    }

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
