Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'hitler',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}hitler  [username] [username] [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    let anotherUser = message.mentions.users.array()[1]
    let thirdUser = message.mentions.users.array()[2]

    
    if (!user) return message.channel.send('Please mention a user baka!')
   

    if (user) {
      const buffer = await canvacord.Canvas.hitler(user.displayAvatarURL({ format: "png" }));
      const attachment = new Discord.MessageAttachment(buffer, "hitler.png");
      message.channel.send(attachment);
      message.delete();
    }
    }
}