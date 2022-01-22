const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "discordblack",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}discordblack [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.DiscordBlack().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "discordblack.png");
    return message.channel.send(attach);
  }
};