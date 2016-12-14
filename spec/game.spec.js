import Game from 'game';
import Player from 'player';
import Board from 'board';

describe('Game', function(){
  describe('constructor', function() {
    it('should make a new game', function(){
      var game1 = new Game();
      expect(game1 instanceof Game).toBeTruthy();

      expect(game1.player1 instanceof Player).toBeTruthy();

      expect(game1.player1.mark).toEqual("X");

      expect(game1.player2 instanceof Player).toBeTruthy();

      expect(game1.player2.mark).toEqual("O");

      expect(game1.board instanceof Board).toBeTruthy();

      expect(game1.turn).toEqual(game1.player1);
    });
  });

  describe('toggleTurn', function() {
    var  game2 = new Game();
    it('should switch to player2 after player1', function() {
      expect(game2.toggleTurn()).toEqual(game2.player2);
    });
  });
});
