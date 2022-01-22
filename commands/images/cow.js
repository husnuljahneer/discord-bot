const { Command } = require('discord.js-commando');
const cows = require('cows');
const rn = require('random-number');

module.exports = {
    name: 'cow',
    aliases: [],
    category: 'Images',
    utilisation: '{prefix}cow',
    description: "Generates meme",
    execute(client, message,args , bot) {
          const options = {
        min: 0,
        max: cows().length - 1,
        integer: true
    };
    const random = rn(options);
    message.channel.send(cows()[random], { code: ''});
    },
};