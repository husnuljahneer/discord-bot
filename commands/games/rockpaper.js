const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.RockPaperScissors()

module.exports = {
  name: 'rockpaper',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}rockpaper',
  description: "Play RockPaperScissors with friends",
  execute: async (client, message, args) => {
   RockPaperScissors.startGame(message)
  }
}