const Discord = module.require('discord.js');

module.exports = {
  name: 'tickle',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}tickle <username>',
  description: "tickle  someone",
  execute: async (client, message, args) => {

    let anotherUser = message.mentions.members.first();
    if (!anotherUser) {
      return message.channel.send("Mention someone tickle!")
    }

    const srp = require('somerandompackage');
    var tickle = await srp.tickle();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**<@${message.author.id}> tickles ${anotherUser}!**`)
      .setImage(tickle)
      .setColor(0xF000FF)
    return message.channel.send(SleepEmbed);
  },
};