const Discord = module.require('discord.js');

module.exports = {
  name: 'think',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}think',
  description: "think something",
  execute: async (client, message, args) => {
    
    const srp = require('somerandompackage');
    var think = await srp.think();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**Thinking !!**`)
      .setImage(think)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
  },
};