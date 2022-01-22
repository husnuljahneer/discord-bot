 const Discord = require("discord.js")

module.exports = {
    name: 'askme',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}askme [message]',
    description: "Ask anything & pepper will reply with some stupid answers",
    execute(client, message,args,bot) {
    if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
    let replies = ["Yes", "No", "I don't know", "Ask again later!", "Cyka", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now", "Without a doubt", ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.MessageEmbed ()

    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed)

    message.delete();
    },

};