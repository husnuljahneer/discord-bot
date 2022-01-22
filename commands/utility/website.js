const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

module.exports = {
    name: 'website',
    aliases: [],
    category: 'Utility',
    utilisation: '{prefix}website',
    description: "Visit pepper-bot website",
    execute(client, message) {
        const embed = new MessageEmbed()
          .setColor("PURPLE")
          .setTitle("pepper-bot Website")
          .setURL('https://husnuljahneer.github.io/pepper-bot-website/')
          .setDescription("pepper-one is a future all in one bot, we are almost there! This bot is under development, but still rocking!\n [Visit Website](https://husnuljahneer.github.io/pepper-bot-website/)")
          .setImage('https://i.imgur.com/euI0k4F.png')
          .setThumbnail('https://i.imgur.com/KsZ3Xun.png')
          .setFooter("© pepper-bot 2021")
        message.channel.send(embed);
    },
};