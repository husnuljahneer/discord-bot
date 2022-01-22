const Discord = module.require('discord.js');

module.exports = {
  name: 'highfive',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}highfive',
  description: "highfive  someone",
  execute: async (client, message, args) => {
    
    const srp = require('somerandompackage');
    var highfive = await srp.highfive();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**<@${message.author.id}>!**`)
      .setImage(highfive)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
  },
};