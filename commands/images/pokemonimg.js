const Discord = module.require("discord.js");

module.exports = {
     name: 'pokemonimg',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}pokemonimg [args]',
    description: "Get Image of the Mentioned Pokemon",
    execute: async(client, message, args) => {
    const state = "enabled";
    if (state === "disabled") {
    return message.channel.send("The command has been disabled for now!")
    }
    const name = args.join(" ");
    if (!name) {
    return message.channel.send("Please type the Pokemon Name or google it xD");
    }
    const link = `https://i.some-random-api.ml/pokemon/${name}.png`;
    const embed = new Discord.MessageEmbed()
    .setTitle(`${name}`)
    .setImage(link)
    .setColor("RANDOM");

    message.channel.send(embed);
    }
}