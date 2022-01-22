const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "mms",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}mms [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.Mms().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "mms.png");
    return message.channel.send(attach);
  }
};