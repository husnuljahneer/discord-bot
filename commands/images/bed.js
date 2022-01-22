Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'bed',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}bed [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    let anotherUser = message.mentions.users.array()[1]

    
    if (!user) return message.channel.send('Please mention a user baka!')
    if (!anotherUser) return message.channel.send('Please mention one more user not same person BAKA!!')

    if (user && anotherUser) {
      const buffer = await canvacord.Canvas.bed(user.displayAvatarURL({ format: "png" }), anotherUser.displayAvatarURL({ format: "png" }));
      const attachment = new Discord.MessageAttachment(buffer, "bed.png");
      message.channel.send(attachment);
      message.delete();
    }
    }
}