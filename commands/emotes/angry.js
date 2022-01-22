const Discord = module.require('discord.js');

module.exports = {
    name: 'angry',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}angry',
    description: "angry af",
    execute: async(client, message, args) => {
        var images = ["https://i.imgur.com/PfMaI8T.jpeg","https://i.imgur.com/HbRSFXI.gif","https://i.imgur.com/lcdCm9P.gif","https://i.imgur.com/uwf8FNj.gif","https://i.imgur.com/Sy8mepf.gif","https://i.imgur.com/QWh5rua.gif","https://i.imgur.com/i9v3epv.gif","https://i.imgur.com/PILHuxB.gif","https://i.imgur.com/V2DlPaw.gif","https://i.imgur.com/fAEltrA.gif","https://i.imgur.com/niBCXzL.gif","https://i.imgur.com/ZSFOdv4.gif","https://i.imgur.com/otRruhO.gif"];
        var image = Math.floor(Math.random() * images.length);
         let SleepEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Is ANGRYYYY AF`)
          .setImage(String([images[image]]))
          .setColor('PURPLE')
         return message.channel.send(SleepEmbed);
    },
};