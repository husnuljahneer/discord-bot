const Discord = module.require('discord.js');

module.exports = {
  name: 'wink',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}wink',
  description: "wink at someone",
  execute: async (client, message, args) => {
    
    const srp = require('somerandompackage');
    var wink = await srp.wink();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**hey there ;)**`)
      .setImage(wink)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
  },
};