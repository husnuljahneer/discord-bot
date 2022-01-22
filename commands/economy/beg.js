const { MessageEmbed } = require("discord.js");
const mongoCurrency = require('discord-mongo-currency-fork');
const ms = require("ms");
const db = require('quick.db');

module.exports = {
  name: 'beg',
  category: 'Economy',
  description: "Beg for some money",
  usage: "{prefix}beg",
  aliases: ['beg'],
  execute: async (client, message, args) => {
    try {
      let user = message.author;
      let author = await db.fetch(`beg_${message.guild.id}_${user.id}`)
      let timeout = 5000;

      if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));

        let timeEmbed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:no_entry_sign: You have already begged recently\n\nTry again in ${time} `);
        return message.channel.send(timeEmbed)
      } else {
        const randomCoins = Math.floor(Math.random() * 99) + 1; // Random amount of coins.
        await mongoCurrency.giveCoins(message.member.id, message.guild.id, randomCoins);
        db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
        return message.channel.send('You really begged hard and earned ₱' + randomCoins + ' Coins!')
      }
    } catch (e) {
      return console.log(e);
    }


  }
}