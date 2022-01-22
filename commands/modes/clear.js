const Discord = require("discord.js");
module.exports = {
    name: 'clear',
    aliases: [],
    category: 'Modes',
    utilisation: '{prefix}clear',

    execute(client, message,args) {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premssions to do that!");
  if(!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: !clear <amount>`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(2000));
});
    },
};