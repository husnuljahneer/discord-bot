const Discord = module.require('discord.js');

module.exports = {
    name: 'dance',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}dance',
    description: "dance dance",
    execute: async(client, message, args) => {
        var images = ["https://i.imgur.com/28zzdho.gif","https://i.imgur.com/5ULGhAn.gif","https://i.imgur.com/YbdJb5Z.gif","https://i.imgur.com/B09t91A.gif","https://i.imgur.com/VV8f9TC.gif","https://i.imgur.com/P3pdnij.gif","https://i.imgur.com/NC0loAP.gif","https://i.imgur.com/MLCgHun.gif","https://i.imgur.com/kauSpmL.gif","https://i.imgur.com/Qs9ty28.gif"];
        var image = Math.floor(Math.random() * images.length);
         let DanceEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Is Dancing xD`)
          .setImage(String([images[image]]))
          .setColor("PURPLE")
         return message.channel.send(DanceEmbed);
    },
};