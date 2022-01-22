Discord = require("discord.js"),
  canvacord = require("canvacord");

module.exports = {
  name: 'rip',
  aliases: [],
  category: 'Images',
  utilisation: '{prefix}rip [username]',
  description: "Generates meme",
  execute: async (client, message, args, img) => {
    let user = message.mentions.users.array()[0]
    const mindtxt = args.slice(1).join(" ");
    if (!user) return message.channel.send('Please mention a dead user baka!')

    if (user ) {
      const buffer = await canvacord.Canvas.rip((user.displayAvatarURL({ format: "png" })));
      const attachment = new Discord.MessageAttachment(buffer, "rip.png");
      message.channel.send(attachment);
      message.delete();
    }
  }
}