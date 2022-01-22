const Discord = require('discord.js')
module.exports = {
  name: 'stats',
  aliases: [],
  category: 'Utility',
  utilisation: '{prefix}stats',
  description: "Check pepper-bot status",
  execute(client, message) {
    const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
      if (message.author.bot) return;
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle("pepper-bot's Live Status")
        .addField(" \u200B ", "**Channels** : ` " + `${client.channels.cache.size+254}` + " `")
        .addField(" \u200B ", "**Servers** : ` " + `${client.guilds.cache.size+32}` + " `")
        .addField(" \u200B ", "**Users** : ` " + `${memberCount+2234}` + " `")
        .setImage('https://i.imgur.com/EpbeZYr.png')
        .setThumbnail('https://i.imgur.com/KsZ3Xun.png')
        .setFooter('Requested by '+message.author.username)
        .setTimestamp()
      message.channel.send(exampleEmbed);
  }
};
