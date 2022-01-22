const discord = require("discord.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "neko",
  aliases: [],
  category: "Anime",
  utilisation: '{prefix}neko',
  description: "Returns random neko",
  execute: async (client, message, args) => {
    try {
      const { url } = await fetch("https://nekos.life/api/v2/img/neko")
        .then((res) => res.json());

      const embed = new Discord.MessageEmbed()
        .setTitle("Neko")
        .setImage(url)

      return message.channel.send(embed);
    } catch (e) {
      return console.log(e);
    }

  }
};

