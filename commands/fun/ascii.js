const discord = module.require("discord.js");
const figlet = require("figlet");

module.exports = {
  name: 'ascii',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}ascii [msg]',
  description: "Generates given text in ascii format",
  execute(client, message,args) {

    let text = args.join(" ");
    if (!text) {
      return message.channel.send(`\`Usage: $ascii [msg]\``)
    }
    let maxlen = 20
    if (text.length > 20) {
      return message.channel.send(`Please put text that has 20 characters or less because the conversion won't be good!`)
    }

    figlet(text, function(err, data) {
      message.channel.send(data, {
        code: 'AsciiArt'
      });
    })
  },
};