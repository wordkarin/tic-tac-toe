import Board from 'board';

var Player = function() {

};

Player.prototype.play = function (position) {
  if (!(Number.isInteger(position))) {
    throw new Error('Input must be an integer between 0 and 8');
  } else if ( position < 0|| position > 8) {
      throw new Error('Input must be an integer between 0 and 8');
  } else {
    return position;
  }
};






export default Player;
