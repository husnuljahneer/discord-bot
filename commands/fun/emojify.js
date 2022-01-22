const discord = require("discord.js");
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};


module.exports = {
  name: 'emojify',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}emojify [message]',
  description: "Provide some text to emojify it",
  execute(client, message, args) {
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
    }
    message.delete();
    message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(''));
  },
};