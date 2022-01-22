// const djsGames = require('djs-games')
// const SnakeGame = new djsGames.SnakeGame()
const SnakeGame = require("./snake-game.js")
const snakeGame = new SnakeGame();

module.exports = {
  name: 'snake',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}snake',
  description: "Simple Snake game",
  execute: async (client, message, args) => {
  snakeGame.startGame(message)
  }
}