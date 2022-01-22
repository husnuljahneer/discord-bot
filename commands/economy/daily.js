const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const mongoCurrency = require('discord-mongo-currency-fork');

module.exports = {
  name: 'daily',
  category: 'Economy',
  description: "Collect Your daily reward!",
  usage: "{prefix}daily",
  aliases: ['daily'],
  execute: async (client, message, args) => {
    try {
      let user = message.author;
      let timeout = 86400000;
      let amount = 200;

      let daily = await db.fetch(`dailycheck_${message.guild.id}_${user.id}`);

      if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        let timeEmbed = new Discord.MessageEmbed()
          .setTitle(`You've already collected your daily reward of **Þ ${amount}** coins`)
          .setColor("RANDOM")
        return message.channel.send(timeEmbed)
      } else {
        let moneyEmbed = new Discord.MessageEmbed()
          .setTitle('Here are your daily coins')
          .setColor("RANDOM")
          .setDescription(`:ballot_box_with_check: You've collected your daily reward of **Þ ${amount}** coins `)
        message.channel.send(moneyEmbed)
        await mongoCurrency.giveCoins(message.member.id, message.guild.id, amount);
        db.set(`dailycheck_${message.guild.id}_${user.id}`, Date.now())
      }
    } catch (e) {
      return console.log(e);
    }

  }
}