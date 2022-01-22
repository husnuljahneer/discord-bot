const Discord = require("discord.js");
const oneLinerJoke = require('one-liner-joke');

module.exports = {
    name: 'joke',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}joke',
    description: "Some lame joke for you",
    execute(client, message) {
           var joke = oneLinerJoke.getRandomJoke();
  message.channel.send({embed: {
  color: 9384170,
  description: joke.body
  }
    })
    },
};