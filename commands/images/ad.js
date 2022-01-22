const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "ad",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}ad <username>',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    const img = await new imange.Ad().getImage(
      message.author.displayAvatarURL(
        {
          dynamic: false,
          format: "png"
        }
      )
    );
    const attach = new MessageAttachment(img, "ad.png");
    return message.channel.send(attach);
  }
};