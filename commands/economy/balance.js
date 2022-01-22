const mongoCurrency = require('discord-mongo-currency-fork');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'balance',
  category: 'Economy',
  description: "Shows your / someone elses balance in this guild",
  usage: "{prefix}balance",
  aliases: ['bal'],
  execute: async (client, message, args) => {
    try {
      const member = message.mentions.members.first() || message.member;
      const user = await mongoCurrency.findUser(member.id, message.guild.id); // Get the user from the database.
      const embed = new MessageEmbed()
      .setTitle(`${member.user.username}'s Balance`)
      .setDescription(`Wallet: ${user.coinsInWallet}
      Bank: ${user.coinsInBank}/${user.bankSpace}
      Total: ${user.coinsInBank + user.coinsInWallet}`);
      return message.channel.send(embed);
    } catch (e) {
      return console.log(e);
    }

  }
}