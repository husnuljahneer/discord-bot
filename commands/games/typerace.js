const djsGames = require('djs-games')
const FastTyper = new djsGames.FastTyper()

module.exports = {
  name: 'typerace',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}typerace',
  description: "Check whos faster",
  execute: async (client, message, args) => {
   FastTyper.startGame(message)
  }
}