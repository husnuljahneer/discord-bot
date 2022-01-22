const Discord = module.require("discord.js");

module.exports = {
    name: "wiki",
    aliases: [],
category: 'Tools',
utilisation: '{prefix}wiki [args]',
    description: "Get Search Results from Wikipedia",
    execute: async(client, message, args) => {
        const search = args.join("_");
        const msg = args.join(" ");
        if (!msg) {
            return message.channel.send("You need to enter some text to search for")
        }
        const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
        const embed = new Discord.MessageEmbed()
        .setTitle("Wikipedia Search")
        .addField(`You Searched for:`, `${msg}`)
        .addField(`Results:`, `[Here's What I found](${link})`)
        .setColor("PURPLE")
        .setTimestamp()
        .setFooter('Requested by '+message.author.username);

        message.channel.send(embed);
    }
}