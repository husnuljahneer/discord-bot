Discord = require("discord.js")
const { Client } = require("discord.js")
const client = new Client()
const { DiscordBattleShip } = require("discord-battleship")

module.exports = {
  name: 'battleship',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}battleship [username]',
  description: "Battleship games",
  execute: async (client, message, args, img) => {

    const BattleShip = new DiscordBattleShip({
      embedColor: "PURPLE", /* Any Discord.js Color Resolvable will work. */
      prefix: "?", /* This is the prefix that will be used in the users DM's for commands. 
                    You can set this to any string. */
    });

    await BattleShip.createGame(message);
  }
}