const Discord = module.require('discord.js');

module.exports = {
  name: 'coffee',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}coffee <username>',
  description: "offer coffee to someone",
  execute: async (client, message, args) => {

    let anotherUser = message.mentions.members.first();
    if (anotherUser) {
       const srp = require('somerandompackage');
    var coffee = await srp.coffee();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**<@${message.author.id}> offers a coffee to ${anotherUser}!**`)
      .setImage(coffee)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
    }else{
      const srp = require('somerandompackage');
    var coffee = await srp.coffee();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**<@${message.author.id}> drinks a coffee**`)
      .setImage(coffee)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
    }

    
  },
};