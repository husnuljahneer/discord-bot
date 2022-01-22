const djsGames = require('djs-games')
const ConnectFour = new djsGames.ConnectFour()

module.exports = {
  name: 'connectfour',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}connectfour [username]',
  description: "Connect Four Game",
  execute: async (client, message, args) => {
  ConnectFour.startGame(message)
  }
}