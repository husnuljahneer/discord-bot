const Discord = require("discord.js");
const client = new Discord.Client({ws: {intents: ["GUILDS", "GUILD_MESSAGES"]}});
const blackjack = require("discord-blackjack");

module.exports = {
  name: 'blackjack',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}blackjack',
  description: "Blackjack game",
  execute: async (client, message, args, img) => {
     let game = await blackjack(message, client)
        
        switch (game.result) {
            
            case 'Win':
                // do win stuff here
                break;
            case 'Tie':
                // do tie stuff here
                break;
            case 'Lose':
                // do lose stuff here
                break;
            case 'Double Win':
                // do double win stuff here
                break;
            case 'Double Lose':
                // do double lose stuff here
                break;
            case 'ERROR':
                // do whatever you want
                break;
        }
    }
}