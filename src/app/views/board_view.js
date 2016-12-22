import Backbone from 'backbone';
import Board from 'app/models/board';

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    // this will actually come from the model, and not have anything in it at initialize.
    this.positions = this.model.positions;
  },

  render: function() {
    const boardList = this.$('#board-display');
    boardList.empty();

    for(var i=0; i < this.positions.length; i++) {
      // this should probably be a template
      var square = "<li class='column board-square' id='" + i + "'>" + this.positions[i] + "</li>";
      boardList.append(square);
    }

    console.log(this.positions);

    // reattach dom even listeners to our brand spanking new HTML
    this.delegateEvents();

    return this;
  },


  events: {
    'click li': 'markPosition'
  },

  markPosition: function(event) {
    this.trigger('userPlay', {model: this.model, position: event.currentTarget.id});

    console.log('markPosition called');
    this.render();
  }

});

export default BoardView;
