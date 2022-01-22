const Discord = module.require('discord.js');

module.exports = {
    name: 'kick',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}kick',
    description: "kick at someone",
    execute: async(client, message, args) => {
        var images = ["https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif","https://media.giphy.com/media/mDoUmvkQiKFDW/giphy.gif","https://media.giphy.com/media/3oEjI0HA4wxi88yUrC/giphy.gif","https://media.giphy.com/media/5kFyglIfieLzaHUxL3/giphy.gif","https://media.giphy.com/media/Tk196jgLFoKx8CNJdT/giphy.gif","https://media.giphy.com/media/BKqoHeHlbcRvW/giphy.gif","https://media.giphy.com/media/l1J3AS8RShMebsmgU/giphy.gif","https://media.giphy.com/media/26n6MnzMOIrDGQJmo/giphy.gif","https://media.giphy.com/media/26n6PChdnDrBhmc7u/giphy.gif"];
        var image = Math.floor(Math.random() * images.length);
         let BlushEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Kicked hard!!`)
          .setImage(String([images[image]]))
          .setColor("PURPLE")
         return message.channel.send(BlushEmbed);
    },
};