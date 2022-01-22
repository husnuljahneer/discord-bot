const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const mongoCurrency = require('discord-mongo-currency-fork');
const db = require('quick.db');

module.exports = {
  name: 'pay',
  category: 'Economy',
  description: "Pay to someone else in this guild",
  usage: "{prefix}pay",
  aliases: ['pay'],
  execute: async (client, message, args) => {
    try {
      const target = message.mentions.users.first();
      const member = message.member;
      const userEco = await mongoCurrency.findUser(member.id, message.guild.id); // Get the user from the database.
      const userBal = userEco.coinsInWallet;

      if (!args[0]) {
        return message.channel.send('Mention someone to pay!')
      }else{
        const targetEco = await mongoCurrency.findUser(target.id, message.guild.id);
        const targetBal = targetEco.coinsInWallet;
      }

      if (target.id == message.author.id) {
        let errorEmbed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`BAKA! You can't share coins to yourself!`);
        return message.channel.send(errorEmbed)
      }

      if (isNaN(args[1]) || args[1].includes('.') || args[1].includes('-') || args[1].includes('e')) {
        return message.lineReply(`Your argument should be either a number and no more than what you have in your wallet (${userBal})\nUsage : $pay @user 100 `)
      }

      let embed1 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`:negative_squared_cross_mark:  Mention someone to pay`);

      if (!target) {
        return message.channel.send(embed1)
      }
      let embed2 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`:negative_squared_cross_mark:  Specify an amount to pay`);

      if (!args[1]) {
        return message.channel.send(embed2)
      }

      let embed4 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`:negative_squared_cross_mark:  You don't have that much money`);

      if (userBal < args[1]) {
        return message.channel.send(embed4)
      }

      let embed5 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`:ballot_box_with_check:  You have payed ${target.username} ${args[1]} coins`);

      message.channel.send(embed5)
      await mongoCurrency.deductCoins(member.id, message.guild.id, args[1])
      await mongoCurrency.giveCoins(target.id, message.guild.id, args[1])
    } catch (e) {
      return console.log(e);
    }


  }
}