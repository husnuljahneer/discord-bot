const Discord = module.require('discord.js');

module.exports = {
  name: 'bite',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}bite [username]',
  description: "bite someone",
  execute: async (client, message, args) => {

    let anotherUser = message.mentions.members.first();
    if (!anotherUser) {
      return message.channel.send("Mention someone to bite!")
    }

    const srp = require('somerandompackage');
    var bite = await srp.bite();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**<@${message.author.id}> bites ${anotherUser}!**`)
      .setImage(bite)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
  },
};