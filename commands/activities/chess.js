const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');


module.exports = {
  name: 'chess',
  aliases: [],
  category: 'Activities',
  utilisation: '{prefix}chess',
  description: "Play chess Together",
  execute: async (client, message, args) => {
 
    client.discordTogether = new DiscordTogether(client);
    if (!message.member.voice.channel){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle(`Chess Together`)
          .setThumbnail('https://cdn.dribbble.com/users/22930/screenshots/2303381/laptop.gif')
          .setDescription('`Error`\nYou need to be in a voice channel for this command!!!')
          .setColor('RED')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)
          return message.channel.send(ErrorEmbed);
    }  
     
    client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
      let chessEmbed = new Discord.MessageEmbed()
          .setTitle(`Chess Together`)
          .setThumbnail('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png')
          .setDescription(`**press to start** 👇 \n[Start chess ](${invite.code})\n \n**Having a problem?** \nUse $together to see instructions on how to fix it.`)
          .setImage('https://i.imgur.com/SKYoe0f.png')
          .setColor('PURPLE')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)

          return message.channel.send(chessEmbed);
    });
  }
}