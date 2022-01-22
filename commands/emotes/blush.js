const Discord = module.require('discord.js');

module.exports = {
    name: 'blush',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}blush',
    description: "blush blush",
    execute: async(client, message, args) => {
        var images = ["https://i.imgur.com/hJWIeMv.gif","https://i.imgur.com/QkLsr6q.gif","https://i.imgur.com/dH6yGFD.gif","https://i.imgur.com/l5A8UJx.gif","https://i.imgur.com/BVzWdzX.gif","https://i.imgur.com/9MWuhVq.gif","https://i.imgur.com/qQpyEAN.gif","https://i.imgur.com/b0Zirvk.gif","https://i.imgur.com/NMVAbT7.gif","https://i.imgur.com/hSBCAF3.gif","https://i.imgur.com/ZQ04J1R.gif","https://i.imgur.com/HertC2k.gif","https://i.imgur.com/01qlwCW.gif","https://i.imgur.com/UsJSrCS.gif","https://i.imgur.com/wxlzdKe.gif","https://i.imgur.com/O5cDNxy.gif","https://i.imgur.com/WVU74MY.gif","https://i.imgur.com/WVU74MY.gif"];
        var image = Math.floor(Math.random() * images.length);
         let BlushEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Is blushing`)
          .setImage(String([images[image]]))
          .setColor("PURPLE")
         return message.channel.send(BlushEmbed);
    },
};