//this is the collection of games, specifically for interacting with the API
import Backbone from 'backbone';
import Game from 'app/models/game';

var Games = Backbone.Collection.extend({
  model: Game,
  url: 'http://localhost:3000/api/v1/games',
  parse: function(data) {
    return data.games;
  }

});

export default Games;
