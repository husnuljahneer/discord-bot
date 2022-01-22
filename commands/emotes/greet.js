const Discord = module.require('discord.js');

module.exports = {
    name: 'greet',
    aliases: [],
    category: 'Emotes',
    utilisation: '{prefix}greet <username>',
    description: "Say hi to someone",
    execute: async(client, message, args) => {
        var images = ["https://media.giphy.com/media/yyVph7ANKftIs/giphy.gif","https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif","https://media.giphy.com/media/8vc2rMUDjhy6Y/giphy.gif","https://media.giphy.com/media/GqtNlBsWoEXDy/giphy.gif","https://media.giphy.com/media/nF64geTGfVoNq/giphy.gif","https://media.giphy.com/media/JVmYAO3MkGNiM/giphy.gif","https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif","https://media.giphy.com/media/brsEO1JayBVja/giphy.gif","https://media.giphy.com/media/14aa5GbbHT3bHO/giphy.gif"];
        var image = Math.floor(Math.random() * images.length);
         let anotherUser = message.mentions.members.first();
        if (anotherUser) {
         let BlushEmbed = new Discord.MessageEmbed()
          .setDescription(`**<@${message.author.id}> says hi to ${anotherUser}!**`)
          .setImage(String([images[image]]))
          .setColor("PURPLE")
         return message.channel.send(BlushEmbed);
        }else{
          let BlushEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} Says Hi!`)
          .setImage(String([images[image]]))
          .setColor("PURPLE")
         return message.channel.send(BlushEmbed);
        }
    },
};