const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
    name: "amazeme",
    aliases: [],
    category: "Images",
    utilisation: '{prefix}amazeme',
    description: "Returns random amazing fact/image.",
    execute: async(client, message, args) => {

  got('https://www.reddit.com/r/interestingasfuck/random.json').then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var amazeme = content[0].data.children[0].data.url;
        let wow = new discord.MessageEmbed()
        .setDescription(`**` + title + `**`)
        .setImage(amazeme)
        .setColor("PURPLE")
        .setTimestamp()
      .setFooter('Requested by '+message.author.username)
        message.channel.send(wow)
    }).catch(console.error);

    }
};