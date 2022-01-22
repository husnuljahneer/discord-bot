const Discord = module.require("discord.js");

module.exports = {
  name: 'orangetext',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}orangetext [message]',
  description: " Colors the Text woth Orange Color",
  execute: async (client, message, args) => {
    const text = args.join(" ");
    if (!text) {
      return message.channel.send("You need to enter some text")
    }
    message.channel.send(`\`\`\`fix\n${text}\n\`\`\``)
  }
}