const Discord = module.require("discord.js");
const nitro = require('discord.js-nitro');

module.exports = {
    name: 'nitro',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}nitro',
    description: "Gift nitro to someone",
    execute(client, message) {
      const boost = true;
   var images = [
   `https://cdn.discordapp.com/attachments/716917641209708647/748945266979242106/IMG_20200828_215650.jpg`,
   `https://cdn.discordapp.com/attachments/716917641209708647/748945228907413675/IMG_20200828_220208.jpg`
   ];
  const embed = new Discord.MessageEmbed()
  .setTitle("Here is your Nitro")
  .setURL(nitro(boost))
  .setImage(images[Math.floor(Math.random()*images.length)])
  .setColor("PURPLE");
 message.channel.send(embed);
    },
};