const Discord = require('discord.js');

module.exports = {
    name: 'pat',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}pat <username>',
    description: "Pat someone or yourself",
    execute(client, message) {
          let slaps = ['https://i.imgur.com/8blui5Q.gif','https://i.imgur.com/g7uHgRA.gif','https://i.imgur.com/omfVVse.gif','https://i.imgur.com/80Ai9Qc.gif','https://i.imgur.com/qLMydij.gif','https://i.imgur.com/uFZITDD.gif'];
    let slapR = slaps[Math.floor(Math.random() * slaps.length)];
    let personslap = message.mentions.members.first();

    if (!personslap) {
        let personslap = 'nobody';

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> WASTED A PAT!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = '';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> Pat themselves! ${personslap}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = '';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> :) ! ${personslap}! !**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> pets ${personslap}!**`)
        .setImage(slapR)
        .setColor("PURPLE");

    message.channel.send(embed);
}

};