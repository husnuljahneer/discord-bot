const Discord = require('discord.js');

module.exports = {
    name: 'cry',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}cry <username>',
    description: "Just cry",
    execute(client, message) {
          let slaps = ['https://i.imgur.com/I18iVJC.gif','https://i.imgur.com/CwUSjuy.gif','https://i.imgur.com/xsyIxxf.gif','https://i.imgur.com/7Yffi3x.gif','https://i.imgur.com/pls8egF.gif','https://i.imgur.com/UjIb9DT.gif','https://i.imgur.com/Dm6n95I.gif','https://i.imgur.com/PcU00J4.gif','https://i.imgur.com/KZtIoTd.gif','https://i.imgur.com/evaPvIa.gif'];
    let slapR = slaps[Math.floor(Math.random() * slaps.length)];
    let personslap = message.mentions.members.first();

    if (!personslap) {
        let personslap = '';

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> I'm sad!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = '';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> is sad! ${personslap}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = '';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> is sad! ${personslap}! !**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> is sad! Because of ${personslap}!**`)
        .setImage(slapR)
        .setColor("PURPLE");

    message.channel.send(embed);
}

};