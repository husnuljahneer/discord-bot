const Discord = require("discord.js");

module.exports = {
  name: 'stories',
  category: 'Tools',
  description: "Upload stories (This command is under development)",
  usage: "{prefix}stories",
  aliases: [],
  execute: async (client, message, args) => {


    let channelName = `pepper-stories`
    let everyoneRoleID = message.guild.roles.everyone
    let authorRoleID = message.author.id
    let findchannelName = message.guild.channels.cache.find(channel => channel.name == channelName)

      if (!findchannelName){
         message.guild.channels.create(channelName, {
      type: "text",
      permissionOverwrites: [
        {
          id: everyoneRoleID,
          deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
        },
        
      ],
    })
      }
      if (findchannelName && message.channel.name != "pepper-stories"){
         message.reply('Channel already exist || Please use pepper-stories channel to use this command')
        .then(msg => {
          msg.delete({ timeout: 2000 })
        })
      }


    if (message.channel.name === "pepper-stories" && !message.author.bot) {
      message.reply('This story will get deleted in 2 seconds')
        .then(msg => {
          msg.delete({ timeout: 2000 })
        })
      message.delete()
    }
     
    

  }
}