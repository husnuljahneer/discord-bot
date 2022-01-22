const Discord = module.require("discord.js");
const ms = module.require("ms");

module.exports = {
  name: "remind",
  aliases: [],
  category: 'Tools',
  utilisation: '{prefix}remind <time> <reminder>',
  description: "Helps remind you something",
  execute: async (client, message, args) => {
    let time = args[0];
    let user = message.author
    let reminder = args.splice(1).join(' ')

    const notime = new Discord.MessageEmbed()
      .setColor('PURPLE')
      .setDescription(`**Please specify the time!**`)
      .setTimestamp()
      .setFooter('Requested by '+message.author.username)

    const wrongtime = new Discord.MessageEmbed()
      .setColor('PURPLE')
      .setDescription(`**Sorry I only do d, m, h, or s.**`)
      .setTimestamp()
      .setFooter('Requested by '+message.author.username)

    const reminderembed = new Discord.MessageEmbed()
      .setColor('PURPLE')
      .setDescription(`**Please tell me what you want to be reminded off**`)
      .setTimestamp()
      .setFooter('Requested by '+message.author.username)

    if (!args[0]) return message.channel.send(notime)
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("s")
    )


    return message.channel.send(wrongtime)
    if (!reminder) return message.channel.send(reminderembed)

    const remindertime = new Discord.MessageEmbed()
      .setColor('PURPLE')
      .setDescription(`\**Your reminder will go off in ${time}**`)
      .setTimestamp()
      .setFooter('Requested by '+message.author.username)

    message.channel.send(remindertime)

    const reminderdm = new Discord.MessageEmbed()
      .setColor('PURPLE')
      .setTitle('**REMINDER**')
      .setDescription(`**It has been ${time} here is your reminder:** ${reminder}`)
      .setTimestamp()
      .setFooter('Requested by '+message.author.username)

     setTimeout(async function() {
       await user.send(reminderdm)
    }, ms(time));
  }
}
