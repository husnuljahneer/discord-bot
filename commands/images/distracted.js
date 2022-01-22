Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'distracted',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}distracted [username] [username] [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    let anotherUser = message.mentions.users.array()[1]
    let thirdUser = message.mentions.users.array()[2]

    
    if (!user) return message.channel.send('Please mention 3 users baka!')
    if (!anotherUser) return message.channel.send('Please mention one more user not same person BAKA!!')
    if (!thirdUser) return message.channel.send('Please mention one more user not same person BAKA!!')

    if (user && anotherUser && thirdUser) {
      const buffer = await canvacord.Canvas.distracted(user.displayAvatarURL({ format: "png" }), anotherUser.displayAvatarURL({ format: "png" }),thirdUser.displayAvatarURL({ format: "png" }));
      const attachment = new Discord.MessageAttachment(buffer, "distracted.png");
      message.channel.send(attachment);
      message.delete();
    }
    }
}