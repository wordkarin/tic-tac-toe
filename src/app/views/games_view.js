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
    console.log('show games called');
  }

});

export default GamesView;
