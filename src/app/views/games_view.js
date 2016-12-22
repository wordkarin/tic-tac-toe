import Backbone from 'backbone';
import $ from 'jquery';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';


const GamesView = Backbone.View.extend({

  initialize: function(){

    var game = new Game();

    var gameview = new GameView({
      el: '#game',
      model: game
    });
    gameview.render();

    this.listenTo(game,'createGame', this.createGame);
    this.listenTo(this.model, 'add', this.addGame);
  },

  events: {
    'click #show-all-games': 'showGames'
  },

  addGame: function() {
    console.log("add game getting called on the collection");

  },

  createGame: function(options){
    console.log('create game here');
    console.log(options);

    this.model.create(options);
    console.log(this.model);
  },

  showGames: function(){
    // var button = this.$('#show-all-games');

    var list = this.$('#prev-games');

    for(var i = 0; i < this.model.length; i++){
      console.log(this.model.models[i].attributes);
      var game = this.model.models[i].attributes;

      var tabledata  = '<tr><td>' + game.id + '</td><td> Date/Time: ' + game.played_at + '</td><td> Winner: ' + game.outcome + '</td></tr>';
      list.append(tabledata);
    }

    this.render();
  },

});

export default GamesView;
