const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
module.exports = {
  name: 'invite',
  aliases: [],
  category: 'Utility',
  utilisation: '{prefix}invite',
  description: "invite the bot to your server",
  execute(client, message) {
   const embed = new MessageEmbed()
      .setColor('PURPLE')
      .setTitle('Invite pepper')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=854653868754862090&permissions=2161638464&scope=bot')
      .setAuthor('pepper-bot', 'https://cdn.discordapp.com/emojis/762039243518115880.gif?size=64 ', 'https://husnuljahneer.github.io/pepper-bot-website/')
      .setDescription('the only bot you need, but we need to work some more to make it happen')
      .setThumbnail('https://i.imgur.com/KsZ3Xun.png')
      .addField('Owner', 'WarM4chineRoxX#2013', true)
      .setImage('https://i.imgur.com/EpbeZYr.png')
      .setTimestamp()
      .setFooter('pepper-bot © 2021', 'https://cdn.discordapp.com/emojis/584087991752982538.png?size=64 ');
      message.channel.send(embed);
  },
};