const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `#ffffff`;

module.exports = {
  name: "enlargemoji",
  aliases: [],
  category: 'Tools',
  utilisation: '{prefix}enlargemoji [emoji]',
  description: "Converting Server emoji to PNG/GIF!",
  execute: async (client, message, args) => {


    const authoravatar = message.author.avatarURL();
    const emoji = args[0];
    if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"
        }`;

      const Added = new MessageEmbed()
        .setAuthor(`Enlarged Emoji`, authoravatar)
        .setColor('PURPLE')
        .setDescription(`\`${customemoji.name}\` \`${customemoji.id}\``)
        .setImage(Link
        )
        .setTimestamp()
            .setFooter('Requested by '+message.author.username);
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Please Give Me A Valid Emoji!`);
      message.channel.send(
        `You Can Use Normal Emoji Without Adding In Server!`
      );
    }
  }
};