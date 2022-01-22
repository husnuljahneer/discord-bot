const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');

module.exports = {
  name: 'together',
  aliases: [],
  category: 'Activities',
  utilisation: '{prefix}together',
  description: "Pepper-Together help menu",
  execute: async (client, message, args) => {
  
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle(`Pepper-Together Help Panel`)
          .setThumbnail('https://t4.ftcdn.net/jpg/03/13/59/79/360_F_313597917_O2PodMkICjIuKla2Axtf5teQ4Pm8C7SR.jpg')
          .setDescription('**How to use Pepper-Together?** \nTo use Pepper-Together you must be in a voice channel and you must be on a PC or laptop running the standard version of discord (Not discord canary or PTB)! \nTo start run $[command] \ncommands: `poker youtube fish betrayal chess` \n\n**Discord together does not load?** \nSometimes Discord together does not load. To fix this go into settings and Authorised Apps. Then remove `Youtube Together, Poker Night, CG 2 Dev, Betrayal.io, or Fishington.io.` After that fully close and reopen Discord. This should fix the issue.')
          .setColor('PURPLE')
          .setTimestamp()
          .setFooter('Requested by '+message.author.username)
          .setImage('https://i.imgur.com/RZZWDH2.png')
          return message.channel.send(ErrorEmbed);
  }
}