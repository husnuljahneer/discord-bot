const Discord = module.require("discord.js");

module.exports = {
  name: 'reverse',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}reverse [message]',
  description: "Reverse the text entered",
  execute: async (client, message, args) => {
    let str = args.join(" ");
    if (!str) {
      return message.channel.send("Enter some text to be reversed")
    }
    message.channel.send(str.split('').reverse().join(''));
  }
}