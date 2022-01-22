module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Utility',
    utilisation: '{prefix}help <command name>',
    description: "Check how to use a command or view the total commands in the bot",
    execute(client, message, args) {
      
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const levels = message.client.commands.filter(x => x.category == 'Levels').map((x) => '`' + x.name + '`').join(', ');            
            const fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(', ');
            const activities = message.client.commands.filter(x => x.category == 'Activities').map((x) => '`' + x.name + '`').join(', ');
            const anime = message.client.commands.filter(x => x.category == 'Anime').map((x) => '`' + x.name + '`').join(', ');
            const games = message.client.commands.filter(x => x.category == 'Games').map((x) => '`' + x.name + '`').join(', ');
            const social = message.client.commands.filter(x => x.category == 'Social').map((x) => '`' + x.name + '`').join(', ');
            const emotes = message.client.commands.filter(x => x.category == 'Emotes').map((x) => '`' + x.name + '`').join(', ');
            const economy = message.client.commands.filter(x => x.category == 'Economy').map((x) => '`' + x.name + '`').join(', ');
            const images = message.client.commands.filter(x => x.category == 'Images').map((x) => '`' + x.name + '`').join(', ');
            const tools = message.client.commands.filter(x => x.category == 'Tools').map((x) => '`' + x.name + '`').join(', ');
            // const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const utility = message.client.commands.filter(x => x.category == 'Utility').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'PURPLE',
                    author: { name: '🌶️ Pepper-Bot Command List' },
                    footer: { text: '🐱‍👤 Made with ❤️️ by WarM4chineRoxX#2013' },
                    fields: [
                        { name: '⚓ Bot', value: infos },
                        { name: '🌶️ Pepper Channels', value: 'Create `#pepper-bot` channel to talk with pepper.\nCreate `#pepper-aki` channel to use Akinator.' },
                        { name: ':first_place: Levels', value: levels },
                        { name: '🎳 Fun', value: fun },
                        { name: '🎪 Activities', value: activities },
                        { name: '🦋 Anime', value: anime },
                        { name: '🎮 Games', value: games },
                        { name: '📮 Social', value: social },
                        { name: '🦍 Emotes', value: emotes },
                        { name: ':coin: Economy', value: economy},
                        { name: '🔥 Images', value: images },
                        { name: '🔮  Tools', value: tools },
                        { name: '🎻 Music', value: '`[Use $music]`'},
                        { name: '🔧 Utility', value: utility },
                        { name: 'Vote For the bot \n ', value:' \n \n ** ⚡__ [ [Vote] ](https://discordbotlist.com/bots/pepper)__** ⚡ \n'},
                        { name: '\n\npepper-bot-website\n ', value:' \n \n ** 🔰__ [ [Pepper] ](https://husnuljahneer.github.io/pepper-bot-website/)__** 🔰 \n'}
                        // { name: ':notes: Song Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    image: {
	                  url: 'https://i.imgur.com/euI0k4F.png',
	                  },
                    thumbnail: {
	                  url: 'https://i.imgur.com/KsZ3Xun.png',
	                  },
                    description: '💌 Ask the dev \n**__[<@576043229602906112>]__** \v  ' 
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'PURPLE',
                    author: { name: '🌶️ Help pannel' },
                    footer: { text: 'Developed and Maintained by WarM4chineRoxX#2013' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Description', value: command.description, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    image: {
	                  url: 'https://i.imgur.com/euI0k4F.png',
	                  },
                    thumbnail: {
	                  url: 'https://i.imgur.com/KsZ3Xun.png',
	                  },
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};