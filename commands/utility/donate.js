const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

module.exports = {
    name: 'donate',
    aliases: [],
    category: 'Utility',
    utilisation: '{prefix}donate',
    description: "Paypal is not activated yet. So no donations accepted",
    execute(client, message) {
        const embed = new MessageEmbed()
          .setColor("PURPLE")
          .setTitle(":coin: Donate")
          .setDescription("Donate for the bot through this links!")
          .addField("PayPal Donate", "[PayPal](https://paypal.me/jahneeeeer)")
          .setFooter("Requested by "+message.author.username)
          .setTimestamp()
          .setImage('https://i.imgur.com/OtsVthN.png')
          .setThumbnail('https://i.imgur.com/KsZ3Xun.png')
	                  
        message.channel.send(embed);
    },
};