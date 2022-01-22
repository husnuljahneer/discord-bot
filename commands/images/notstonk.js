const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "notstonk",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}notstonk [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.NotStonk().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "notstonk.png");
    return message.channel.send(attach);
  }
};