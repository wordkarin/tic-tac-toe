import Game from 'game';
import Player from 'player';
import Board from 'board';

describe('Game', function(){
  describe('constructor', function() {
    it('should make a new game', function(){
      var game1 = new Game();
      expect(game1 instanceof Game).toBeTruthy();

      expect(game1.player1 instanceof Player).toBeTruthy();

      expect(game1.player2 instanceof Player).toBeTruthy();

      expect(game1.board instanceof Board).toBeTruthy(); 
    });
  });
});
