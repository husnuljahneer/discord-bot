const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "captcha",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}captcha [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.Captcha().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "captcha.png");
    return message.channel.send(attach);
  }
};