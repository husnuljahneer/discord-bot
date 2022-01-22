const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const mongoCurrency = require('discord-mongo-currency-fork');

module.exports = {
  name: 'deposit',
  category: 'Economy',
  description: "deposit your balance in this guild",
  usage: "{prefix}deposit",
  aliases: ['dep'],
  execute: async (client, message, args) => {
    try{
      const member = message.mentions.members.first() || message.member;
    const user = await mongoCurrency.findUser(member.id, message.guild.id);
    const wallet = user.coinsInWallet


    if (args[0] == 'all') {

      let embedbank = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription(":no_entry_sign:  You don't have any money to deposit")
      if (wallet === 0) return message.channel.send(embedbank)

      if (user.bankSpace == user.coinsInBank) {
        let bankspaceError2 = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:no_entry_sign: You don't have enough Bank Space to deposit all \nEarn Bank space by using pepper-commands!`)
        return message.channel.send(bankspaceError2)
      }
      if (user.bankSpace < wallet) {
        depAmount = wallet - user.bankSpace;
        balAmount = -(depAmount - wallet);
        let bankspaceError = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:ballot_box_with_check: You have deposited ₱ ${balAmount} coins into your bank\n:no_entry_sign: You don't have enough Bank Space to deposit all \nEarn Bank space by using pepper-commands!`)
        await mongoCurrency.deposit(message.member.id, message.guild.id, balAmount);
        return message.channel.send(bankspaceError)
      }

      await mongoCurrency.deposit(message.member.id, message.guild.id, wallet);
      let embed5 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`:ballot_box_with_check:  You have deposited all your coins into your bank`)
      message.channel.send(embed5)

    } else if (isNaN(args[0]) || args[0].includes('.') || args[0].includes('-') || args[0].includes('e')) {
      return message.lineReply(`Your argument should be either a number and no more than what you have in your wallet (${wallet}) , or max`)
    } else {
      if (args[0]) {
        if (user.bankSpace < wallet) {
          depAmount = wallet - user.bankSpace;
          balAmount = -(depAmount - wallet);
          let bankspaceError = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`:ballot_box_with_check: You have deposited ₱ ${balAmount} coins into your bank\n:no_entry_sign: You don't have enough Bank Space to deposit all \nEarn Bank space by using pepper-commands!`)
          await mongoCurrency.deposit(message.member.id, message.guild.id, balAmount);
          return message.channel.send(bankspaceError)
        }
        if (user.bankSpace == user.coinsInBank) {
          let bankspaceError2 = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`:no_entry_sign: You don't have enough Bank Space to deposit all \nEarn Bank space by using pepper-commands!`)
          return message.channel.send(bankspaceError2)
        }
        let embed4 = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:no_entry_sign: You don't have that much money`)
        if (wallet < args[0]) {
          return message.channel.send(embed4)
        }
        let embed5 = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`:ballot_box_with_check: You have deposited ₱ ${args[0]} coins into your bank`)
        return message.channel.send(embed5)
        await mongoCurrency.deposit(message.member.id, message.guild.id, args[0]);
      }
      let embed2 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`:no_entry_sign:  Specify an amount to deposit`)


      if (!args[0]) {
        return message.channel.send(embed2)
          .catch(err => console.log(err))
      }
      let embed3 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`:no_entry_sign: You can't deposit negative money`)
    }
    }catch(e){
      return console.log(e);
    }
  }
}