const Discord = module.require("discord.js");

module.exports = {
  name: 'greentext',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}greentext [args]',
  description: "Turn the given text to greentext",
  execute(client, message, args) {
    const text = args.join(" ");
    if (!text) {
      return message.channel.send("You need to enter some text")
    }
    message.channel.send(`\`\`\`css\n${text}\n\`\`\``)
  }
};