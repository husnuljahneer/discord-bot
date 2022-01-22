const { discord } = require('../../config/bot.js')
const { prefix } = discord
module.exports = {
  name: 'test',
  aliases: [],
  category: '',
  utilisation: '{prefix}test',
  description: "Single? Ready to mingle?",

  execute: async (client, message, args) => {


    //Code to create a private channel with only the author have the permission to view
    
    var server = message.guild
    const author = message.author.username
    let everyoneRoleID = message.guild.roles.everyone
    let channelName = `matchup-${author}`
    let authorRoleID = message.author.id
    let categoryName = 'MatchUp'

    let findchannelName = message.guild.channels.cache.find(channel => channel.name === channelName.toLowerCase())

    if (findchannelName) {
      return message.reply('Channel already exist use ' + channelName.toLowerCase())
    }


    const createChannel = async (categoryid) => {
      await message.guild.channels.create(channelName, {
        type: "text",
        parent: categoryid,
        permissionOverwrites: [
          {
            id: everyoneRoleID,
            allow: [],
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
          },
          {
            id: authorRoleID,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
            deny: []
          }
        ],
      })
    }

    let matchupCategory = message.guild.channels.cache.find(channel => channel.name == categoryName)

    if (!matchupCategory) {
      message.guild.channels.create(categoryName, {
        type: "category",
        permissionOverwrites: [
          {
            id: everyoneRoleID,
            allow: [],
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
          },
          {
            id: authorRoleID,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
            deny: []
          }
        ],
      }).then(channel =>
        createChannel(channel.id)
      )
    }
    else {
      matchupCategory = message.guild.channels.cache.find(channel => channel.name == categoryName)
      await createChannel(matchupCategory.id)
    }


    let newPrivateChannel = message.guild.channels.cache.find(channel => channel.name === channelName.toLowerCase())
    const channelGreet = `Hello ${message.author} \n Use \`${prefix}start-quiz\` to begin`
    client.channels.cache.get(newPrivateChannel.id).send(channelGreet)


  },
}
