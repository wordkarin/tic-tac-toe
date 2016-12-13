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
});
