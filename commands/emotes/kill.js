const Discord = require('discord.js');

module.exports = {
    name: 'kill',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}kill <username>',
    description: "Kill yourself or someone",
    execute(client, message) {
          let slaps = ['https://i.imgur.com/umCms9c.gif','https://i.imgur.com/m8ZtlNO.gif','https://i.imgur.com/3uMLnPC.gif','https://i.imgur.com/8Emt3HH.gif','https://i.imgur.com/q1AQ4vD.gif','https://i.imgur.com/HshuBMF.gif','https://i.imgur.com/b7cFfKJ.gif','https://i.imgur.com/NWEGNSx.gif'];
    let slapR = slaps[Math.floor(Math.random() * slaps.length)];
    let personslap = message.mentions.members.first();
    let quote = ['Oof', 'Ouch', 'That hurt', 'Wow', 'OMG', 'Yeet'];
    let quoter = quote[Math.floor(Math.random() * quote.length)];

    if (!personslap) {
        let personslap = 'nobody';

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> Killed  ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = 'they own damn selves';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> Sliced ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = 'me, the fricc?';
        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> Sent ${personslap} to hell! ${quoter}!**`)
            .setImage(slapR)
            .setColor("PURPLE");

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> said Rip ${personslap}! ${quoter}!**`)
        .setImage(slapR)
        .setColor("PURPLE");

    message.channel.send(embed);
}

};