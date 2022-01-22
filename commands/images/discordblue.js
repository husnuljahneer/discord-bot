const imange = require("imange")
const { MessageAttachment } = require("discord.js")

module.exports = {
  name: "discordblue",
  aliases: [],
  category: "Images",
  utilisation: '{prefix}discordblue [username]',
  description: "Generates meme.",
  execute: async (client, message, args) => {
    if(!message.mentions.users.first()){
       return message.channel.send("Mention someone BAKA!") 
      }
    const img = await new imange.DiscordBlue().getImage(
       message.mentions.users.first().displayAvatarURL(
        {
         dynamic: false,
         format: "png" 
        }
    ));
    const attach = new MessageAttachment(img, "discordblue.png");
    return message.channel.send(attach);
  }
};