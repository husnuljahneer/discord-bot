const Discord = module.require('discord.js');

module.exports = {
  name: 'tea',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}tea <username>',
  description: "offer tea to someone",
  execute: async (client, message, args) => {

    let anotherUser = message.mentions.members.first();
    if (anotherUser) {
      const srp = require('somerandompackage');
      var tea = await srp.tea();
      let SleepEmbed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> offers a tea to ${anotherUser}!**`)
        .setImage(tea)
        .setColor("PURPLE")
      return message.channel.send(SleepEmbed);
    } else {
      const srp = require('somerandompackage');
      var tea = await srp.tea();
      let SleepEmbed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> is having some delicious tea!**`)
        .setImage(tea)
        .setColor("PURPLE")
      return message.channel.send(SleepEmbed);
    }


  },
};