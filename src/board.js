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
  this.positions[position] = mark;
  return position;
};








export default Board;
