const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

module.exports = {
    name: 'vote',
    aliases: [],
    category: 'Utility',
    utilisation: '{prefix}vote',
    description: "Vote for pepper-bot. Rewards are under development",
    execute(client, message) {
        const embed = new MessageEmbed()
          .setColor("PURPLE")
          .setTitle("Vote for Pepper-Bot")
          .setDescription("Rewards are currently under development, but still you can vote! Show some Love <3'")
          .addField("discordbotlist.com", "**[Vote Now](https://discordbotlist.com/bots/pepper/upvote)**")
          .setFooter("Requested by "+message.author.username)
          .setTimestamp()
          .setImage('https://i.imgur.com/nAzELaU.png')
          .setThumbnail('https://media.giphy.com/media/fveKCnZRN7aOrtWNfj/giphy.gif')
	                  
        message.channel.send(embed);
    },
};