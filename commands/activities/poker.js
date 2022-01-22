const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');


module.exports = {
  name: 'poker',
  aliases: [],
  category: 'Activities',
  utilisation: '{prefix}poker',
  description: "Play poker Together",
  execute: async (client, message, args) => {
 
    client.discordTogether = new DiscordTogether(client);
    if (!message.member.voice.channel){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle(`Poker Together`)
          .setThumbnail('https://cdn.dribbble.com/users/22930/screenshots/2303381/laptop.gif')
          .setDescription('`Error`\nYou need to be in a voice channel for this command!!!')
          .setColor('RED')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)
          return message.channel.send(ErrorEmbed);
    }  
     
    client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
      let PokerEmbed = new Discord.MessageEmbed()
          .setTitle(`Poker Together`)
          .setThumbnail('https://i.pinimg.com/originals/87/06/6e/87066e108e5c962c644d2450a62269a3.png')
          .setDescription(`**press to start** 👇 \n[Start Poker ](${invite.code})\n \n**Having a problem?** \nUse $together to see instructions on how to fix it.`)
          .setColor('PURPLE')
          .setImage('https://i.imgur.com/88Mdrlr.png')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)

          return message.channel.send(PokerEmbed);
    });
  }
}