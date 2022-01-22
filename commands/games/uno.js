const { Client } = require("discord.js")
const { DiscordUNO } = require("discord-uno")
const { discordUNO } = require("discord-uno")

module.exports = {
  name: 'uno',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}uno',
  description: "Play uno with your friends | This command is under construction",
  execute: async (client, message, args, img) => {
    message.channel.send('This command is under construction. wont work')
    const mindtxt = args.slice(1).join(" ");
    const discordUNO = new DiscordUNO();
    await discordUNO.createGame(message);
    if (mindtxt === "join") {
      await discordUNO.addUser(message);
    }
  }


}