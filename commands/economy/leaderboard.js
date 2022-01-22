const mongoCurrency = require('discord-mongo-currency-fork');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'rich',
  category: 'Economy',
  description: "Shows leaderboard in this guild",
  usage: "{prefix}rich",
  execute: async (client, message, args) => {
    try {
      const leaderboard = await mongoCurrency.generateLeaderboard(message.guild.id, 10);
    
    if (leaderboard.length < 1) return message.channel.send("Nobody's on the leaderboard.");
    
    const mappedLeaderboard = leaderboard.map(i => `${client.users.cache.get(i.userId).tag ? client.users.cache.get(u.userId).tag : "Nobody"} - ${i.coinsInWallet}`);
    
    const embed = new MessageEmbed()
    .setTitle(`${message.guild.name}\'s Leaderboard`)
    .setDescription(`${mappedLeaderboard.join('\n')}`);
    
    return message.channel.send(embed);
    } catch (e) {
      console.log(e)
      return message.channel.send('```An Unknown Error Occured! Please Contact the dev```')
    }


  }
}
