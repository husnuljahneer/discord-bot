const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');

module.exports = {
  name: 'youtube',
  aliases: [],
  category: 'Activities',
  utilisation: '{prefix}youtube',
  description: "Watch youtube Together",
  execute: async (client, message, args) => {
 
    client.discordTogether = new DiscordTogether(client);
    if (!message.member.voice.channel){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle(`YouTube Together`)
          .setThumbnail('https://cdn.dribbble.com/users/22930/screenshots/2303381/laptop.gif')
          .setDescription('`Error`\nYou need to be in a voice channel for this command!!!')
          .setColor('RED')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)
          return message.channel.send(ErrorEmbed);
    }  
     
    client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
      let youtubeEmbed = new Discord.MessageEmbed()
          .setTitle(`YouTube Together`)
          .setThumbnail('https://cdn0.iconfinder.com/data/icons/significon-social/512/Significon-YouTube-512.png')
          .setDescription(`**press to start** 👇 \n[Start youtube ](${invite.code})\n \n**Having a problem?** \nUse $together to see instructions on how to fix it.`)
          .setColor('PURPLE')
          .setImage('https://i.imgur.com/a7QVq95.png')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)

          return message.channel.send(youtubeEmbed);
    });
  }
}