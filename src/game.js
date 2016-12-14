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













export default Game;
