const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');


module.exports = {
  name: 'betrayal',
  aliases: [],
  category: 'Activities',
  utilisation: '{prefix}betrayal',
  description: "Play betrayal Together",
  execute: async (client, message, args) => {
 
    client.discordTogether = new DiscordTogether(client);
    if (!message.member.voice.channel){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle(`Betrayal Together`)
          .setThumbnail('https://cdn.dribbble.com/users/22930/screenshots/2303381/laptop.gif')
          .setDescription('`Error`\nYou need to be in a voice channel for this command!!!')
          .setColor('RED')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)
          return message.channel.send(ErrorEmbed);
    }  
     
    client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
      let betrayalEmbed = new Discord.MessageEmbed()
          .setTitle(`Betrayal Together`)
          .setThumbnail('https://images-ext-1.discordapp.net/external/hNJ4hYQHa2gUIe7Oe_oYoLy2rvXEWHZsUJNOH4sVFKo/https/play-lh.googleusercontent.com/Kh7yW9hHtBpXmJDM2JUpOWeqJsK4XPZO4kT8LboI49RAYnV1hCABK1h76ZFowMi5PI4')
          .setDescription(`**press to start** 👇 \n[Start betrayal ](${invite.code})\n \n**Having a problem?** \nUse $together to see instructions on how to fix it.`)
          .setColor('PURPLE')
          .setImage('https://i.imgur.com/0X8WN8h.png')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)

          return message.channel.send(betrayalEmbed);
    });
  }
}