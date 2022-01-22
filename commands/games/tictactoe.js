const TicTacToe = require('discord-tictactoe');
const Discord = require('discord.js');
const client = new Discord.Client();
const game = new TicTacToe({ language: 'en' })

module.exports = {
  name: 'tictactoe',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}tictactoe',
  description: "Play TicTacToe",
  execute(client, message) {

    game.handleMessage(message);

  },
};