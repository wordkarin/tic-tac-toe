import Backbone from 'backbone';

import Board from 'app/models/board';

const Game = Backbone.Model.extend({
  defaults: {
    player1: "X",
    player2: "O",
    isOver: false
  },

  initialize: function(options){
    this.board = new Board();

    //starting game with turn being equal to player 1 (X)
    this.turn = this.get("player1");
    this.winner = undefined;
  },

  toggleTurn: function () {
    if (this.turn == this.get("player1")) {
      this.turn = this.get("player2");
    } else if (this.turn == this.get("player2")) {
      this.turn = this.get("player1");
    }
    return this.turn;
  },

  gameOver: function () {
    for (var i = 0; i < this.board.positions.length; i++) {
      if(this.board.positions[i] == " "){
        return false;
      }
    }
    this.set("isOver", true); 
    return true;
  },

  winHorizontal: function () {
    for(var i = 0; i < this.board.positions.length; i += 3){
      if ((this.board.positions[i] == this.board.positions[i+1]) && (this.board.positions[i] == this.board.positions[i+2])){
        if(this.board.positions[i] != " "){
          this.winner = this.turn;
          return true;
        }
      }
    }
    return false;
  },

  winVertical: function () {
    for(var i = 0; i < 3; i++) {
      if((this.board.positions[i] == this.board.positions[i+3]) && (this.board.positions[i] == this.board.positions[i+6])) {
        if(this.board.positions[i] != " ") {
          this.winner = this.turn;
          return true;
        }
      }
    }
    return false;
  },

  winDiagonal: function () {
    // both diagonals use index 4, so check to make sure that it's not an empty string, and if it is, return false
    if(this.board.positions[4] == " "){
      return false;
    }

    // this is the left to right diagonal
    if((this.board.positions[0] == this.board.positions[4]) && (this.board.positions[0] == this.board.positions[8])) {
      this.winner = this.turn;
      return true;
    }

    // this is the right to left diagonal
    if((this.board.positions[2] == this.board.positions[4]) && (this.board.positions[2] == this.board.positions[6])) {
      this.winner = this.turn;
      return true;
    }
    return false;
  },

  gameWin: function () {
    if(this.winVertical() || this.winHorizontal() || this.winDiagonal()) {
      this.set("isOver", true);
      return true;
    } else {
      return false;
    }
  },

  takeTurn: function (position) {
    //this.turn is whose turn it is
    this.board.markPlay(this.turn, position);

    //let that exception fly!
    // toggle turn unless someone has won or game is over.
    if (this.gameWin()) {
      return this.winner;
    } else if (this.gameOver()) {
      return "gameOver";
    } else {
      this.toggleTurn();
    }
  }
});
export default Game;
