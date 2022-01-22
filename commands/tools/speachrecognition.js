const { DiscordSR } = require('discord-speech-recognition');

module.exports = {
  name: "speakrec",
  aliases: [],
  category: 'Tools',
  utilisation: '{prefix}speakrec',
  description: "Speech recognition",
  execute: async (client, message, args) => {
    

       if (!message.member.voice.channel) return message.channel.send('You are not connected to any voice channel! ')
       if (message.member.voice.channel){
        message.member.voice.channel.join();
      }
     
      const discordSR = new DiscordSR(client);
       client.on('speech', message => {
      message.author.send(message.content);
     
      })
   
  }
}
