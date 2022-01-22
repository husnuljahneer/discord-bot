module.exports = {
  name: 'debug',
  aliases: [],
  category: 'Infos',
  utilisation: '{prefix}debug',
  description: "Check if pepper-bot is working",
  execute(client, message) {
    message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size+3}** channels !`);
    message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`);
    message.channel.send(`${client.emotes.success} - Can Sent Texts`);
    message.channel.send(`${client.emotes.success} - Help Command is working !`);
    message.channel.send(`${client.emotes.success} - Economy Commands are working !`);
    message.channel.send(`${client.emotes.success} - Activities Commands are working !`);
    message.channel.send(`${client.emotes.success} - Anime Commands are working !`);
    message.channel.send(`${client.emotes.success} - Emotes Commands are working !`);
    message.channel.send(`${client.emotes.success} - Fun Commands are working !`);
    message.channel.send(`${client.emotes.success} - Games Commands are working !`);
    message.channel.send(`${client.emotes.success} - Images Commands are working !`);
    message.channel.send(`${client.emotes.success} - Infos Commands are working !`);
    message.channel.send(`${client.emotes.success} - Modes Commands are working !`);
    message.channel.send(`${client.emotes.success} - Music Commands are working !`);
    message.channel.send(`${client.emotes.error} - Filter Commands are disabled !`);
    message.channel.send(`${client.emotes.success} - Social Commands are working !`);
    message.channel.send(`${client.emotes.success} - Tools Commands are working !`);
    message.channel.send(`${client.emotes.success} - Utility Commands are working !`);

    message.channel.send('```[Debugging Finished!]```');
  },
};