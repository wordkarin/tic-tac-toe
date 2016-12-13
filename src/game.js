import Player from 'player';
import Board from 'board';


var Game = function () {
  // for each game, we make two players
  this.player1 = new Player();
  this.player1.mark = "X";
  this.player2 = new Player();
  this.player2.mark = "O"; 

  this.board = new Board();
};









export default Game;
