Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'beautiful',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}beautiful [username]',
  description: "Beautify someone",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    if (!user) return message.channel.send('Please mention a user baka!')
  
    if (user) {
      const buffer = await canvacord.Canvas.beautiful(user.displayAvatarURL({ format: "png" }));
      const attachment = new Discord.MessageAttachment(buffer, "beautiful.png");
      message.channel.send(attachment);
      message.delete();
    }
    }
}