import Board from 'board';

describe('Board', function(){
  describe('constructor', function(){
    it('should make a positions array of length 9', function(){
      var board1 = new Board();
      expect(board1.positions instanceof Array).toBeTruthy();

      expect(board1.positions[0]).toEqual(" ");

      expect(board1.positions.length).toEqual(9);
    });
  });

  describe('validPlay', function(){
    var board2 = new Board();
    it('should return true if position is available', function() {
      expect(board2.validPlay(1)).toBeTruthy();
    });

    it('should return false if position is unavailable', function(){
      expect(board2.validPlay(2)).toBeTruthy();

      board2.markPlay('X', 2);

      expect(board2.validPlay(2)).toBeFalsy();
    });
  });

  describe('markPlay', function() {
    var board2 = new Board();
    it('should mark the board with the play for that player', function(){
      expect(board2.markPlay('X', 1)).toEqual(1);

      expect(board2.positions[1]).toEqual('X');
    });

    it('should throw an error if 2 arguments are not passed to it', function(){
      expect(function() {
        board2.markPlay(2);
      }).toThrow(new Error('Wrong number of arguments'));
    });
  });
});
