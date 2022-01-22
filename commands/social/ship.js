const discord = require('discord.js')

module.exports = {
  name: 'ship',
  aliases: [],
  category: 'Social',
  utilisation: '{prefix}ship',
  description: "Check the ship compatibility in between two users",
  execute(client, message, args, prefix) {


    let user = message.mentions.members.first();
    let RN = Math.floor(Math.random() * 100) + 1


    if (!user) return message.channel.send('Please mention a user to ship')
    if (user == message.author) return message.channel.send('Please mention someone and not yourself')

    const UnloveEmbed = new discord.MessageEmbed()
      .setTitle('This is not a match')
      .setThumbnail('https://cdn.discordapp.com/emojis/830152684584829030.gif?v=1&size=40')
      .setDescription(`${message.author} shipped with ${user} and it is ${RN}%`)
      // .setImage(message.author.avatarURL())
      .setColor('PURPLE')
      .setTimestamp()
      .setFooter('Requested by '+message.author.username)

    const loveEmbed = new discord.MessageEmbed()
      .setTitle('They are born for each other')
      .setThumbnail('https://cdn.discordapp.com/emojis/784115813790515270.gif?v=1&size=40')
      .setDescription(`${message.author} shipped with ${user} and it is ${RN}%`)
      // .setImage(message.author.avatarURL())
      .setColor('PURPLE')
      .setTimestamp()
      .setFooter('Requested by '+message.author.username)

    if (RN > 50) {
      message.channel.send(loveEmbed)
    } else {
      message.channel.send(UnloveEmbed)
    }
  },
};
