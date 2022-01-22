const Discord = module.require("discord.js");
const imdb = require("imdb-api");

module.exports = {
    name: "imdb",
    aliases: [],
category: 'Tools',
utilisation: '{prefix}imdb [arg]',
    description: "Get the information about series and movies",
    execute: async(client, message, args) => {
        var state = "Enabled";
        if (state === "Disabled") {
            return message.channel.send("Command has been disabled! Contact Bot Owner for more info!")
        }
        const name = args.join(" ");
        if (!name) {
            return message.channel.send("Please Give the name of a movie or series!")
        }

        const imob = new imdb.Client({apiKey: "5e36f0db"})

        let movie = await imob.get({'name': args.join(" ")})

        const embed = new Discord.MessageEmbed()
        .setTitle(movie.Title)
        .setColor("PURPLE")
        .setThumbnail(movie.poster)
        .setDescription(`Description: \`${movie.plot}\`\nRatings: \`${movie.ratings}\`\nCountry: \`${movie.country}\`\nLanguages: \`${movie.languages}\`\nType: \`${movie.type}\``)
        .setTimestamp()
        .setFooter('Requested by '+message.author.username);
     message.channel.send(embed);
    }
}