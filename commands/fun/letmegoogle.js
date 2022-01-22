
const Discord = require('discord.js')
module.exports = {
  name: 'google',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}google [args]',
  description: "Helps you to use let me google command in discord",
  execute(client, message) {
    if (message.content.length == 0) {
      message.channel.send({
        embed: {
          color: 0xfc1846,
          description: '**' + 'Error, empty argument' + '**',
        }
      });
      return;
    }
    message.channel.send(":zap: *Furiously starts googling because you are too lazy to do that* :vampire:")
    message.channel.send('https://lmgtfy.app/?q=' + encodeURIComponent(message))
  },
};