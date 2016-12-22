import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Game from 'app/models/game';
import Games from 'app/collections/games';
import GamesView from 'app/views/games_view';
// import Board from 'app/models/board';
// import BoardView from 'app/views/board_view';
import GameView from 'app/views/game_view';

$(document).ready(function(){

  var games = new Games();
  var gameListView = new GamesView({
    el: $('body'), //this will be something else later.
    model: games
  });

  games.fetch();
  console.log(games);

});
