const discord = module.require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: 'Social',
  utilisation: '{prefix}avatar [username]',
  description: "Returns the avatar of message author or mentioned user.",
  execute: async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let embed = new discord.MessageEmbed()
      .setColor("PURPLE")
      .setTitle(`${user.username}'s Avatar`)
      .setDescription(`[Avatar Link](${user.displayAvatarURL({ size: 2048, dynamic: true, format: "png" })})`)
      .setImage(user.avatarURL({ size: 2048, dynamic: true, format: "png" }))
      .setTimestamp()
      .setFooter('Requested by '+message.author.username)

    message.channel.send(embed)
    message.delete();
  },
};