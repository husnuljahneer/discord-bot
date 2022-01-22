const Discord = module.require('discord.js');

module.exports = {
    name: 'sleepy',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}sleepy',
    description: "sleepy sleepy",
    execute: async(client, message, args) => {
        var images = ["https://i.imgur.com/3lwHqpe.gif","https://i.imgur.com/urDWpLp.jpeg","https://i.imgur.com/SEkFAdL.gif","https://i.imgur.com/dfKEw8t.jpeg","https://i.imgur.com/Oe36qzp.jpeg"];
        var image = Math.floor(Math.random() * images.length);
         let SleepEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Is Sleeeeepy AF`)
          .setImage(String([images[image]]))
          .setColor("PURPLE")
         return message.channel.send(SleepEmbed);
    },
};