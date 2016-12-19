import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Game from 'app/models/game';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import GameView from 'app/views/game_view';

$(document).ready(function(){
  var boardview = new BoardView({
    el: '.board'
  });

  boardview.render();
});
