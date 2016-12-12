# Tic-Tac-Toe
Bring an interactive Tic-Tac-Toe game to life! You'll start with a plain JavaScript program that can be played in the terminal. From there you'll extend the game logic into a full Backbone web application and connect it to a back-end API (which will be provided).

## Learning Goals
With this project you'll get exposure to the following skills:
- JavaScript unit testing with [Jasmine](https://jasmine.github.io/)
- Program/code design from scratch
- Writing an application with complex model logic
- Reworking existing code for a new environment (plain JS -> Backbone)
- Backbone API integration

### Basic Setup
This project uses the same [Backbone scaffold](https://github.com/AdaGold/backbone-baseline) from the previous Backbone projects. For the first wave you will not need to use Backbone or jQuery at all, however it will be simpler to convert your code to Backbone later on with all of the scaffold in place.

#### Using the REPL
If you want to interact with your game in the terminal via a REPL, you'll need to do things in a specific way (due to the scaffold's use of webpack).

To access the REPL you should use the command `npm run repl` in your project directory. Once in the REPL, you'll need to use the following syntax to import your file (this example assumes it was named `src/game.js`):

```javascript
var Game = require('game').default;
var game = new Game();
```

NOTE: This only works if your `game.js` file has an `export default` line in it, which it should (it'll be necessary for the Backbone conversion).

## Requirements
This project is divided into three waves that will be completed over the next two weeks. The majority of the first week will be dedicated to wave one, with the second and third waves taking place the week after.

### Wave One
The primary learning goals in this wave are writing unit tests for JavaScript with Jasmine, and program/code design. What we mean by program design is that the specific approach to implementing your Tic-Tac-Toe game's logic will be up to you.

Below we have laid out the requirements for your implementation in the form of user stories. Because user stories do not specify an implementation or interface (i.e. they do not say you must make a function named `highestScoreFrom`), there's a lot of flexibility for what approach you take.

#### Program Design
The overarching goal with the program design requirement is for you to spend more time at the beginning of the project thinking about what functionality the application needs, how that can be split up into individual functions, and what the inputs and outputs of those functions are.

This might seem like an unwarranted distraction from diving right into the code when you're under such time constraints. But a great deal of time can be saved by avoiding costly refactors if it turns out that your initial approach won't allow you to achieve certain requirements. The more complex the application's logic is, the more difficult and time-consuming it will be to rework that logic after it has been written.

#### User Stories
- As a user of the Tic-Tac-Toe game I CAN:
  - Create a new game:
    - It will have an empty board of nine cells
    - It will start with the X player having the first move
  - Specify up to two player names
  - Get the current outcome of the game (X win, O win, tie, or undecided)
  - (OPTIONAL) View a printed version of the current game board for debugging purposes
- As the 'active' player in a game I CAN:
  - Make a move by specifying an empty board cell
    - It will mark the board in the given cell, using the mark for the 'active' player
    - It will switch the 'active' player designation to the other player
- As the 'active' player in a game I CANNOT:
  - Make a move by specifying a marked board cell
  - Make a move after the game has already completed (either win or tie)
  - Skip making a move
- As the 'inactive' player in a game I CANNOT:
  - Make a move
  - Skip making a move

Some things to keep in mind:
- The stories above are intended to describe an implementation that uses a _single_ JavaScript "class" with a set of functions that represent its **interface**.
- Your "class" should have a constructor function that does not take any arguments. This is only to minimize the work needed to later convert this code to a Backbone Model.
- The user in these stories is really just other JavaScript code -- your Jasmine tests in wave one, and other Backbone code in later waves.
- Some of these stories likely map 1-to-1 to individual functions, while others describe certain aspects of how a single function should behave.
- Just because a particular noun (e.g. player) is used in these stories, doesn't mean that it needs to exist as a specific class/concept in the code. The simplest approach to this problem would not involve creating player objects.

To keep things simple, your code should live in a single JavaScript file (e.g. `src/game.js`). For the first wave you should implement the Tic-Tac-Toe game with the "object-oriented" style used for the [Scrabble](https://github.com/AdaGold/js-scrabble) project.

#### Testing Requirements
You should strive to follow the TDD approach when building this application. Whenever you decide that a new function is necessary to implement one or another feature, you should begin by writing tests for that function.

- Every function in your application should have at least two tests
- All tests should pass
- We don't have any code coverage tool setup for this project, but if you have every function tested then it should be essentially 100%

### Wave Two:
In this wave you will convert your existing Tic-Tac-Toe game code into a Backbone Model and create a Backbone View for rendering and interacting with that model.

#### Converting to Backbone Model
More details forthcoming

### Wave Three:
In this wave you'll connect the Backbone web application you created in the previous wave to an existing Rails API that has standard RESTful CRUD routes.

- Read the documentation for the [Tic-Tac-Toe API](https://github.com/Ada-c6/tic-tac-toe-api)
