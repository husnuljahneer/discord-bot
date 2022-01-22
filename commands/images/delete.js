const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "delete",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}delete [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.Delete().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "delete.png");
    return message.channel.send(attach);
  }
};