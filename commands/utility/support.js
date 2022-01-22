const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

module.exports = {
    name: 'support',
    aliases: [],
    category: 'Utility',
    utilisation: '{prefix}support',
    description: "Get support from the author of the bot",
    execute(client, message) {
        const embed = new MessageEmbed()
          .setColor("PURPLE")
          .setTitle("pepper-bot Support")
          .setURL('https://husnuljahneer.github.io/pepper-bot-website/')
          .setDescription("Support discord server \n [Visit Server](https://discord.gg/gqB8GCRcDm) \n \n Support staff [WarM4chineRoxX#2013]")
          .setThumbnail('https://i.imgur.com/KsZ3Xun.png')
          .setFooter("© pepper-bot 2021")
          .setImage('https://i.imgur.com/klrMB5h.png')
        message.channel.send(embed);
    },
};