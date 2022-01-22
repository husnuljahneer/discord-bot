const Discord = require("discord.js");
const db = require('quick.db');
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const mongoCurrency = require('discord-mongo-currency-fork');

module.exports = {
  name: 'rob',
  category: 'Economy',
  description: "Rob someone in this guild",
  usage: "{prefix}rob",
  aliases: [],
  execute: async (client, message, args) => {

    try {
      const target = message.mentions.users.first() || message.member;
      const member = message.member;
      const userEco = await mongoCurrency.findUser(member.id, message.guild.id); // Get the user from the database.
      const userBal = userEco.coinsInWallet;
      const targetEco = await mongoCurrency.findUser(target.id, message.guild.id);
      const targetBal = targetEco.coinsInWallet;
      let author = await db.fetch(`rob_${message.guild.id}_${target.id}`)
      let timeout = 600000;

      // console.log(target)
      if (target.id == message.author.id) {
        let targetError = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Mention Someone to rob! `);
        return message.channel.send(targetError)
      }
      if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));

        let timeEmbed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:no_entry_sign:  You have already robbed someone\n\nTry again in ${time} `);
        return message.channel.send(timeEmbed)
      } else {
        let moneyEmbed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:no_entry_sign: You need atleast 200 coins in your wallet to rob someone `);

        if (userBal < 200) {
          return message.channel.send(moneyEmbed)

        }
        let moneyEmbed2 = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:no_entry_sign:  ${targetEco} does not have anything you can rob`);
        if (targetBal < 0) {
          return message.channel.send(moneyEmbed2)
        }


        const randomCoins = Math.floor(Math.random() * 99) + 1; // BLACK amount of coins
        // let vip = await db.fetch(`bronze_${user.id}`)
        // if (vip === true) BLACK = Math.floor(Math.BLACK() * 200) + 1;
        // if (vip === null) BLACK = Math.floor(Math.BLACK() * 100) + 1;

        let embed = new Discord.MessageEmbed()
          .setDescription(`:white_check_mark:  You robbed ${target.username} and got away with ${randomCoins} coins`)
          .setColor("BLACK")
        message.channel.send(embed)
        await mongoCurrency.deductCoins(target.id, message.guild.id, randomCoins)
        await mongoCurrency.giveCoins(member.id, message.guild.id, randomCoins)
        db.set(`rob_${message.guild.id}_${target.id}`, Date.now())
      };
    } catch (e) {
      return console.log(e);
    }


  }
}