const Discord = module.require('discord.js');

module.exports = {
    name: 'stare',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}stare',
    description: "Stare at someone",
    execute: async(client, message, args) => {
        var images = ["https://media.giphy.com/media/Xasq0msrdTbWg/giphy.gif","https://media.giphy.com/media/eoZOuZVqMg240/giphy.gif","https://media.giphy.com/media/OQYmdyH3A6NnW/giphy.gif"," https://media.giphy.com/media/Xe9zDNJ3oVpHq/giphy.gif"];
        var image = Math.floor(Math.random() * images.length);
         let BlushEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} ^_^`)
          .setImage(String([images[image]]))
          .setColor("PURPLE")
         return message.channel.send(BlushEmbed);
    },
};