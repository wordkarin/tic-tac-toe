import Player from 'player';
import Board from 'board';


var Game = function () {
  // for each game, we make two players
  this.player1 = new Player();
  this.player1.mark = "X";
  this.player2 = new Player();
  this.player2.mark = "O";

  this.board = new Board();

  //starting game with turn being equal to player 1 (X)
  this.turn = this.player1;
};

Game.prototype.toggleTurn = function () {
  if (this.turn == this.player1) {
    this.turn = this.player2;
  } else if (this.turn == this.player2) {
    this.turn = this.player1;
  }
  return this.turn;
};

Game.prototype.gameOver = function () {
  for (var i = 0; i < this.board.positions.length; i++) {
    if(this.board.positions[i] == " "){
      return false;
    }
  }
  return true;
};

Game.prototype.winHorizontal = function () {
  for(var i = 0; i < this.board.positions.length; i += 3){
    if ((this.board.positions[i] == this.board.positions[i+1]) && (this.board.positions[i] == this.board.positions[i+2])){
      if(this.board.positions[i] != " "){
        return true;
      }
    }
  }
  return false;
};

Game.prototype.winVertical = function () {
  for(var i = 0; i < 3; i++) {
    if((this.board.positions[i] == this.board.positions[i+3]) && (this.board.positions[i] == this.board.positions[i+6])) {
      if(this.board.positions[i] != " ") {
        return true;
      }
    }
  }
  return false;
};













export default Game;
