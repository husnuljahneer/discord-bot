const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "approved",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}approved [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.Approved().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "approved.png");
    return message.channel.send(attach);
  }
};