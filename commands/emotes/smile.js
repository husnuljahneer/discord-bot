const Discord = require('discord.js');

module.exports = {
    name: 'smile',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}smile <username>',
    description: "Express your happiness",
    execute(client, message) {
          let slaps = ['https://i.imgur.com/5XPAidc.gif','https://i.imgur.com/WHoBy4O.gif','https://i.imgur.com/MMM9q5e.gif','https://i.imgur.com/lGfjxDx.gif','https://i.imgur.com/vxM2YGD.gif','https://i.imgur.com/tZkaLJV.gif'];
    let slapR = slaps[Math.floor(Math.random() * slaps.length)];
    let personslap = message.mentions.members.first();

    if (!personslap) {
        let personslap = 'nobody';

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> is happy!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = '';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> is happy! ${personslap}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = '';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> is happy! ${personslap}! !**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> is happy! Thanks to ${personslap}!**`)
        .setImage(slapR)
        .setColor("PURPLE");

    message.channel.send(embed);
}

};