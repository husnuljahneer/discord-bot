Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'trigger',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}trigger [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    if (!user) return message.channel.send('Please mention a user baka!')
  
    if (user) {
      const buffer = await canvacord.Canvas.trigger(user.displayAvatarURL({ format: "png", size: 512 }));
      const attachment = new Discord.MessageAttachment(buffer, "trigger.png");
      message.channel.send(attachment);
      message.delete();
    }
    }
}