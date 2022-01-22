const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "affect",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}affect [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.Affect().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "affect.png");
    return message.channel.send(attach);
  }
};