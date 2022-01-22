const Discord = module.require('discord.js');

module.exports = {
  name: 'run',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}run',
  description: "run ",
  execute: async (client, message, args) => {
    
    const srp = require('somerandompackage');
    var run = await srp.run();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**RUNNNN !!**`)
      .setImage(run)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
  },
};