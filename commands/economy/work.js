const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const mongoCurrency = require('discord-mongo-currency-fork');

module.exports = {
  name: 'work',
  category: 'Economy',
  description: "",
  usage: "{prefix}work",
  aliases: [],
  execute: async (client, message, args) => {
    try {

      let user = message.author;
      let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

      let timeout = 600000;

      if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));

        let timeEmbed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:no_entry_sign:  You have already worked recently\n\nTry again in ${time} `);
        return message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:ballot_box_with_check:  You worked as a ${replies[result]} and earned ${amount} coins`);
        message.channel.send(embed1)

        await mongoCurrency.giveCoins(message.member.id, message.guild.id, amount);
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
      };
    } catch (e) {
      return console.log(e);
    }
  }
}