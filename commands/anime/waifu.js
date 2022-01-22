module.exports = {
    name: 'waifu',
    aliases: [],
    category: 'Anime',
    utilisation: '{prefix}waifu',
    description: "Generates a waifu image",
    execute(client, message) {
        message.channel.send(`https://www.thiswaifudoesnotexist.net/example-${Math.floor(Math.random() * 100000)}.jpg`);
    },
};