const Discord = require('discord.js');

module.exports = {
  name: 'poke',
  aliases: [],
  category: 'Emotes',
  utilisation: '{prefix}poke <username>',
  description: "Poke yourself or someone else",
  execute(client, message, args) {
    let personPoke = message.mentions.members.first();
    let pokes = ['https://i.imgur.com/N7g7caI.gif','https://i.imgur.com/It4Mk9z.gif','https://i.imgur.com/KCAdA7c.gif','https://i.imgur.com/H7Ok5tn.gif','https://i.imgur.com/xSvkpIh.gif'];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
      let personPoke = "nobody";

      let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just poked ${personPoke}!**`)
        .setImage(pokesR)
        .setColor("PURPLE");

      message.channel.send(embed);
      return;
    }

    let embed = new Discord.MessageEmbed()
      .setDescription(`**<@${message.author.id}> just poked ${personPoke}!**`)
      .setImage(pokesR)
      .setColor("PURPLE");

    message.channel.send(embed);
  },
};