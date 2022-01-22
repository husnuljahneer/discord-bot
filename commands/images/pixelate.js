Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'pixelate',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}pixelate [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    if (!user) return message.channel.send('Please mention a user baka!')
  
    if (user) {
      const buffer = await canvacord.Canvas.pixelate(user.displayAvatarURL({ format: "png" }));
      const attachment = new Discord.MessageAttachment(buffer, "pixelate.png");
      message.channel.send(attachment);
      message.delete();
    }
    }
}