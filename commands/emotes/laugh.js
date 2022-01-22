const Discord = module.require('discord.js');

module.exports = {
  name: 'laugh',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}laugh',
  description: "laugh ",
  execute: async (client, message, args) => {
    
    const srp = require('somerandompackage');
    var laugh = await srp.laugh();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**HAHAHAHA !!**`)
      .setImage(laugh)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
  },
};