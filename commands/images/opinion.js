Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'opinion',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}opinion [message] [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    const mindtxt = args.slice(1).join(" ");
    if (!mindtxt) return message.channel.send('Please desc something here!')
    if (!user) return message.channel.send('Please mention a user baka!')


    if (user && mindtxt) {
      const buffer = await canvacord.Canvas.opinion((user.displayAvatarURL({ format: "png" })), (mindtxt));
      const attachment = new Discord.MessageAttachment(buffer, "opinion.png");
      message.channel.send(attachment);
      message.delete();
    }
  }
}