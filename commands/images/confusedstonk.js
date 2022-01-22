const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "confusedstonk",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}confusedstonk [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.ConfusedStonk().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "confusedstonk.png");
    return message.channel.send(attach);
  }
};