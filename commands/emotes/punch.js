const Discord = require('discord.js');

module.exports = {
    name: 'punch',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}punch <username>',
    description: "Punch someone",
    execute(client, message) {
          let slaps = ['https://i.imgur.com/Vqoadcv.gif','https://i.imgur.com/8vB46zh.gif','https://i.imgur.com/BSXviU7.gif','https://i.imgur.com/J0ChlRO.gif'];
    let slapR = slaps[Math.floor(Math.random() * slaps.length)];
    let personslap = message.mentions.members.first();
    let quote = ['Oooooo', 'F', 'YeeHaw!', 'Mammmmyyy', 'OMG', 'eeeH'];
    let quoter = quote[Math.floor(Math.random() * quote.length)];

    if (!personslap) {
        let personslap = 'nobody';

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> hits  ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = 'themselves';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> punched ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = 'Huh? Who!? Oh.. ';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> punched ${personslap} ! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> punched ${personslap}! ${quoter}!**`)
        .setImage(slapR)
        .setColor("PURPLE");

    message.channel.send(embed);
}

};