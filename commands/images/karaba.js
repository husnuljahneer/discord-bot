const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "karaba",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}karaba [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.Karaba().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "karaba.png");
    return message.channel.send(attach);
  }
};