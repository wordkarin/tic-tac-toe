import Backbone from 'backbone';
import Game from 'app/models/game';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function(options) {
    var playBoard = this.model.board;

    var board = new BoardView({
      el: '.board',
      model: playBoard
    });
    this.listenTo(board, 'userPlay', this.turnPlay);

    board.render();
  },

  render: function() {

    return this;
  },

  events: {
    'click button': 'restartGame'
  },

  turnPlay: function(options){
    console.log("turnPlay!");
    console.log(JSON.parse(options.position));
    // this.model.board.markPlay(this.model.turn, options.position);
    this.model.takeTurn(JSON.parse(options.position));
  },

  restartGame: function(event) {
    // this probably needs to happen up a level from here - cannot destroy all the things from within here.
    console.log('restartGame called');
    this.model.destroy();
    var game = new Game();
    var newGame = new GameView({
      el: ('#game'),
      model: game
    });
    newGame.render();

  }


});

export default GameView;
