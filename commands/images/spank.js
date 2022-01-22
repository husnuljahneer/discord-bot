Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'spank',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}spank [username] [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    let anotherUser = message.mentions.users.array()[1]
    
    if (!user) return message.channel.send('Please mention 2 users baka!')
    if (!anotherUser) return message.channel.send('Please mention one more user baka!')

    if (user && anotherUser ) {
      const buffer = await canvacord.Canvas.spank(user.displayAvatarURL({ format: "png" }),anotherUser.displayAvatarURL({ format: "png" }));
      const attachment = new Discord.MessageAttachment(buffer, "spank.png");
      message.channel.send(attachment);
      message.delete();
    }
  }
}