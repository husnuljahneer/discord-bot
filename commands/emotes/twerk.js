const Discord = module.require('discord.js');

module.exports = {
    name: 'twerk',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}twerk',
    description: "twerk at someone",
    execute: async(client, message, args) => {
        var images = ["https://media.giphy.com/media/3ohuPievzdrtXipbFK/giphy.gif","https://media.giphy.com/media/3oKHWj94cDdcn5Impa/giphy.gif","https://media.giphy.com/media/DqhwoR9RHm3EA/giphy.gif","https://media.giphy.com/media/iQ6yGuMhPGWhW/giphy.gif","https://i.imgur.com/i0wlLu4.gif","https://i.imgur.com/RExdLZu.gif","https://i.imgur.com/F70ofV6.gif","https://i.imgur.com/o1uw54W.gif"];
        var image = Math.floor(Math.random() * images.length);
         let BlushEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} ^_^`)
          .setImage(String([images[image]]))
          .setColor("PURPLE")
         return message.channel.send(BlushEmbed);
    },
};