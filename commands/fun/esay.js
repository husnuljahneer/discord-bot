const Discord = module.require("discord.js");

module.exports = {
  name: "esay",
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}esay [message]',
  description: "Send Messages in embed form",
  execute: async (client, message, args) => {
    let msg = args.join(" ");
    if (!msg) {
      return message.channel.send("Enter some text")
    }
    const embed = new Discord.MessageEmbed()
      .setDescription(`${msg}`)
      .setColor("PURPLE");

    message.channel.send(embed);
    message.delete();
  }
}