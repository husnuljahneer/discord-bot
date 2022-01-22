Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'ohno',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}ohno [message]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    const mindtxt = args.slice(0).join(" ");
    if (!mindtxt) return message.channel.send('Please desc something here!')

    if (mindtxt) {
      const buffer = await canvacord.Canvas.ohno(mindtxt);
      const attachment = new Discord.MessageAttachment(buffer, "ohno.png");
      message.channel.send(attachment);
      message.delete();
    }
  }
}