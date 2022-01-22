Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'clyde',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}clyde [message]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    const mindtxt = args.slice(0).join(" ");
    if (!mindtxt) return message.channel.send('Please desc something here!')
  
    if (mindtxt) {
      const buffer = await canvacord.Canvas.clyde(mindtxt);
      const attachment = new Discord.MessageAttachment(buffer, "clyde.png");
      message.channel.send(attachment);
      message.delete();
    }
    }
}