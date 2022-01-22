const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const mongoCurrency = require('discord-mongo-currency-fork');

module.exports = {
  name: 'weekly',
  category: 'Economy',
  description: "Collect Your weekly reward!",
  usage: "{prefix}weekly",
  aliases: ['weekly'],
  execute: async (client, message, args) => {
    try {
      let user = message.author;
      let timeout = 604800000;
      let amount = 500;

      let weekly = await db.fetch(`weeklycheck_${message.guild.id}_${user.id}`);

      if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
        let time = ms(timeout - (Date.now() - weekly));

        let timeEmbed = new Discord.MessageEmbed()
          .setTitle(`You've already collected your weekly reward of **Þ ${amount}** coins`)
          .setColor("BLACK")
        return message.channel.send(timeEmbed)
      } else {
        let moneyEmbed = new Discord.MessageEmbed()
          .setTitle('Here are your weekly coins')
          .setColor("BLACK")
          .setDescription(`:ballot_box_with_check: You've collected your weekly reward of **Þ ${amount}** coins `)
         message.channel.send(moneyEmbed)
        await mongoCurrency.giveCoins(message.member.id, message.guild.id, amount);
        db.set(`weeklycheck_${message.guild.id}_${user.id}`, Date.now())
      }
    } catch (e) {
      return console.log(e);
    }


  }
}