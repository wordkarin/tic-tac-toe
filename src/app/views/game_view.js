import Backbone from 'backbone';
// import Game from 'app/models/game';
// import Board from 'app/models/board';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function(options) {
    var board = new BoardView({
      el: '.board'
    });

    board.render();
  },

  render: function() {

    return this;
  },

  events: {
    'click button': 'restartGame'
  },

  restartGame: function(event) {
    console.log('restartGame called');
  }
});

export default GameView;
