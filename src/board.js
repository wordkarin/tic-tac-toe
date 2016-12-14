var Board = function() {
  this.positions = [];
  for(var i = 0; i < 9; i++){
    this.positions.push(" ");
  }
};

Board.prototype.validPlay = function (position) {
  if(this.positions[position] == " ") {
    return true;
  } else {
    return false;
  }
};

Board.prototype.markPlay = function (mark, position) {
  if(position === undefined) {
    throw new Error('Wrong number of arguments');
  } else if(this.validPlay(position)) {
    this.positions[position] = mark;
    return position;
  } else {
    throw new Error('that position is already taken');
  }
};








export default Board;
