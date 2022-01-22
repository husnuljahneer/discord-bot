const Discord = require('discord.js');

module.exports = {
    name: 'feed',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}feed <username>',
    description: "Feed someone or eat yourself",
    execute(client, message) {
          let slaps = ['https://i.imgur.com/GidM8NB.gif','https://i.imgur.com/87KyVyo.gif','https://i.imgur.com/HpwUiTT.gif','https://i.imgur.com/x2k2i4e.gif','https://i.imgur.com/aNFhwkU.gif','https://i.imgur.com/RM9syur.gif','https://i.imgur.com/XL9pcD7.gif','https://i.imgur.com/vEMpKn4.gif','https://i.imgur.com/vAGhoM3.gif','https://i.imgur.com/pGZZLQC.gif','https://i.imgur.com/prjMLQI.gif','https://i.imgur.com/mQTenDy.gif','https://i.imgur.com/a5peIPa.gif','https://i.imgur.com/1GqCLmv.gif','https://i.imgur.com/0HKlFVH.gif','https://i.imgur.com/Eepioc2.gif','https://i.imgur.com/nIELkKi.gif','https://i.imgur.com/M7JMpij.gif','https://i.imgur.com/mxWzRbD.gif'];
    let slapR = slaps[Math.floor(Math.random() * slaps.length)];
    let personslap = message.mentions.members.first();
    let quote = ['Umm', 'AHah', 'Sweet', 'Wow', 'OMG', 'eeeH'];
    let quoter = quote[Math.floor(Math.random() * quote.length)];

    if (!personslap) {
        let personslap = 'nobody';

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> feeds  ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = 'themselves';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> feeds ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = 'Huh? Who!? Oh.. ';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> gave some to ${personslap} ! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> feeds ${personslap}! ${quoter}!**`)
        .setImage(slapR)
        .setColor("PURPLE");

    message.channel.send(embed);
}

};