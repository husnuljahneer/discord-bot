const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const mongoCurrency = require('discord-mongo-currency-fork');
require('discord-reply');

module.exports = {
  name: 'withdraw',
  category: 'Economy',
  description: "withdraw your balance in this guild",
  usage: "{prefix}withdraw",
  aliases: ['with'],
  execute: async (client, message, args) => {
  
  try{
    const member = message.mentions.members.first() || message.member;
  const user = await mongoCurrency.findUser(member.id, message.guild.id); 
  const bank = user.coinsInBank

  if(args[0]=='all'){
    let embedbank = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(":no_entry_sign:  You don't have any money to withdraw")
    if(bank === 0) return message.channel.send(embedbank)

    await mongoCurrency.withdraw(message.member.id, message.guild.id, bank);
    let embed5 = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`:ballot_box_with_check:  You have withdrawn all your coins into your wallet`)
    message.channel.send(embed5)
    
  }else if(isNaN(args[0]) || args[0].includes('.')|| args[0].includes('-') || args[0].includes('e') ){
     return message.lineReply(`Your argument should be either a number and no more than what you have in your bank (₱ ${bank}) , or all`)
  }

  if (args[0] == 'all') {
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription(`:no_entry_sign:  Specify an amount to withdraw`)

  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
 
  let embed4 = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription(`:no_entry_sign: You don't have that much money`)


  if (bank < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription(`:ballot_box_with_check: You have withdrawn ₱ ${args[0]} coins into your wallet`)
  message.channel.send(embed5)
  await mongoCurrency.withdraw(message.member.id, message.guild.id, args[0]);
  }
  }catch(e){
      return console.log(e);
    }

  
  }
}