Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'jail',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}jail [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    if (!user) return message.channel.send('Please mention a user baka!')
  
    if (user) {
      const buffer = await canvacord.Canvas.jail(user.displayAvatarURL({ format: "png" }));
      const attachment = new Discord.MessageAttachment(buffer, "jail.png");
      message.channel.send(attachment);
      message.delete();
    }
    }
}