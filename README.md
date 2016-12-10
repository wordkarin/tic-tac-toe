# Tic-Tac-Toe
Bring an interactive Tic-Tac-Toe game to life, starting with plain JavaScript program that will be played in the terminal. Then building up to a Backbone application with a GUI .

## MINIMUM REQUIREMENTS

### Wave One
 Command Line Application with plain JavaScript.

- In `/src`, create a new file called `game.js`
- Review the Tic-Tac-Toe API. _(Games will be saved to this API when we get to Backbone)_
- Plan the design of your Tic-Tac-Toe game
- Create tests to cover all functionality

When you are ready to test your game, run this command in terminal: `npm run repl`. Once in the REPL, you'll need to run the following to access the `src/game.js` file.

```
$ var Game = require('game').default;
$ var game = new Game();
```

### Wave Two:
Plan architecture
Build structure

### Wave Three:
Implement your Tic-Tac-Toe game into a Backbone Application.

Move `src/game.js` into a model of a backbone application


### Wave Four:
Connect the Backbone application to an API

- Read the documentation for the [Tic-Tac-Toe API](https://github.com/Ada-c6/tic-tac-toe-api)
- Save the results of a Game to the API
- Setup a request to see all Games with a Backbone Collection
- Setup a request to see a specific game with a Backbone Model





##### NOTE: Backbone Scaffold
This project uses [Ada's Backbone scaffold](https://github.com/AdaGold/backbone-baseline).
