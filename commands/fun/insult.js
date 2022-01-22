const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const yoMamma = require('yo-mamma').default;

module.exports = {
    name: 'insult',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}insult',
    description: "Insult someone",
    execute(client, message) {
            let insult = yoMamma();
            message.channel.send(insult)
    },
};