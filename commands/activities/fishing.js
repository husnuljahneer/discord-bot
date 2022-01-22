const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');

module.exports = {
  name: 'fishing',
  aliases: [],
  category: 'Activities',
  utilisation: '{prefix}fishing',
  description: "Play fishing Together",
  execute: async (client, message, args) => {
 
    client.discordTogether = new DiscordTogether(client);
    if (!message.member.voice.channel){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle(`Fishing Together`)
          .setThumbnail('https://cdn.dribbble.com/users/22930/screenshots/2303381/laptop.gif')
          .setDescription('`Error`\nYou need to be in a voice channel for this command!!!')
          .setColor('RED')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)
          return message.channel.send(ErrorEmbed);
    }  
     
    client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
      let fishingEmbed = new Discord.MessageEmbed()
          .setTitle(`Fishing Together`)
          .setThumbnail('https://api.web.gamepix.com/assets/img/105/105/icon/fishing-io.png')
          .setDescription(`**press to start** 👇 \n[Start fishing ](${invite.code})\n \n**Having a problem?** \nUse $together to see instructions on how to fix it.`)
          .setColor('PURPLE')
          .setTimestamp()
          .setImage('https://i.imgur.com/Lhb9RPI.png')
          .setFooter('Requested by '+message.author.username)

          return message.channel.send(fishingEmbed);
    });
  }
}