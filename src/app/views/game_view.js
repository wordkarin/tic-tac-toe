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
    this.listenTo(this.model, 'change', this.showBanner);

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

    // if no one has won yet or game is not over, call takeTurn.
    if(!(this.model.gameWin() ||this.model.gameOver())){
      this.model.takeTurn(JSON.parse(options.position));
    } else {
      // else, print something to the screen saying game is over.
      console.log("You can't keep playing, the game is over!");
    }
  },

  showBanner: function(){
    console.log("showBanner!");
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
