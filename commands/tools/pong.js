const Discord = require('discord.js')
module.exports = {
    name: 'pong',
    aliases: [],
    category: 'tools',
    utilisation: '{prefix}pong',
    description: "Just to test",
    execute: async(client, message) => {
      
        message.channel.send(`Sending pong in return`);
    },
};