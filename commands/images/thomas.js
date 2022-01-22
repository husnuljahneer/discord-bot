const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "thomas",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}thomas [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.Thomas().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "thomas.png");
    return message.channel.send(attach);
  }
};