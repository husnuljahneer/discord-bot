const Discord = require('discord.js');
module.exports = {
  name: 'music',
  aliases: [],
  category: 'Music',
  utilisation: '{prefix}music',
  description: "Music Help",
  execute(client, message,channel) {
  const musicEmbed = new Discord.MessageEmbed()
	.setColor('PURPLE')
	.setTitle('Pepper-Music Help panel')
	.setDescription('Without music, life would be a mistake')
	.setThumbnail('https://i.imgur.com/KsZ3Xun.png')
	.addFields(
		{ name: 'PLAY', value: '`play`,`add`,`join`\n`$ <search string | video URL | playlist URL>`' },
		{ name: 'STOP', value: '`stop`,`leave`', inline: true },
		{ name: 'NOW PLAYING', value: '`np`,`nowplaying`,`current`', inline: true },
    { name: 'SKIP', value: '`skip`,`next`,`>>`', inline: true },
    { name: 'QUEUE', value: '`queue`,`list`,`show`', inline: true },
    { name: 'PAUSE', value: '`pause`', inline: true },
    { name: 'RESUME', value: '`resume`', inline: true },
    { name: 'VOLUME', value: '`volume`,`setvolume`,`$ <valid number beetween 0 and 100>`', inline: true },
    { name: 'REMOVE', value: '`remove`,`delete`,`$ <valid number of a song position in the queue>`', inline: true },
    { name: 'LYRICS', value: '`lyrics`,`$ <song title> || or no args if a song is playing`', inline: true  },

	)
	.setImage('https://i.imgur.com/XUvCpwR.png')
	.setTimestamp()
	.setFooter('Made with ❤️ by WarM4chineRoxX#2013');

  message.channel.send(musicEmbed);
  },
};