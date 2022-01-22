const Discord = require("discord.js");
const client = new Discord.Client();

const Chat = require("../tools/pepperchatbot")
const chat = new Chat({ name: "Pepper", owner: "WarM4chineRoxX#2013" });

module.exports = {
  name: 'talktobot',
  aliases: [],
  category: 'Social',
  utilisation: '{prefix}talktobot [message]',
  description: "Create a channel named pepper-bot, This bot is always high you may not get the response you are looking for ",
  execute: async (client, message, args) => {
    if (message.channel.name != "pepper-bot") {
      return message.channel.send("Create a Channel named `pepper-bot`. \nAnd Talk normal as you do!.")
    }
    if (message.channel.name === "pepper-bot" && !message.author.bot) {
      let reply = await chat.chat(message.content)
      message.channel.send(reply)

    }

  }
}