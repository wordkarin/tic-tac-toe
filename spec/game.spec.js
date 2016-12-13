import Game from 'game';

describe('Game', function(){
  describe('constructor', function() {
    it('should make a new game', function(){
      var game1 = new Game();
      expect(game1 instanceof Game).toBeTruthy();
    });
  });
});
