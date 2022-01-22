const Discord = require("discord.js");
const akinator = require("discord.js-akinator");
const client = new Discord.Client();

module.exports = {
  name: 'aki',
  aliases: [],
  category: 'Social',
  utilisation: '{prefix}aki',
  description: "Create a channel named pepper-bot, This bot is always high you may not get the response you are looking for ",
  execute: async (client, message, args) => {
      
     message.channel.send('Please Create a channel named `pepper-aki` to use!\nAnd Use this command in that channel.');
    
      if(message.channel.name === "pepper-aki" && !message.author.bot) {    
       akinator(message, client, "en");
    }
    }
}