const Discord = module.require('discord.js');

module.exports = {
  name: 'drunk',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}drunk',
  description: "get drunked",
  execute: async (client, message, args) => {
    
    const srp = require('somerandompackage');
    var drunk = await srp.drunk();
    let SleepEmbed = new Discord.MessageEmbed()
      .setDescription(`**<@${message.author.id}> is drunk af!**`)
      .setImage(drunk)
      .setColor("PURPLE")
    return message.channel.send(SleepEmbed);
  },
};