const Discord = module.require('discord.js');

module.exports = {
  name: 'shock',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}shock',
  description: "shockED",
  execute: async (client, message, args) => {
    
    const srp = require('somerandompackage');
    var shock = await srp.shock();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**WTFFF !!**`)
      .setImage(shock)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
  },
};