const Discord = require('discord.js')
const discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: 'deep',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}deep',
    description: "pepper will return some deep quotes for you",
    execute(client, message) {

         const g = [
      "https://cdn.discordapp.com/emojis/731580131193389109.png?v=1&size=40", "https://cdn.discordapp.com/emojis/782110122788126740.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/781228541948723260.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/829165184621740072.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/829034048282165278.png?v=1&size=40", "https://cdn.discordapp.com/emojis/782131206619004979.png?v=1&size=40", "https://cdn.discordapp.com/emojis/815563203492053025.png?v=1&size=40", "https://cdn.discordapp.com/emojis/785105379515957248.gif?v=1&size=40 ", "https://cdn.discordapp.com/emojis/829034179823403068.png?v=1&size=40", "https://cdn.discordapp.com/emojis/830154197289664603.gif?v=1&size=40 ", "https://cdn.discordapp.com/emojis/813891297081425951.png?v=1&size=40", "https://cdn.discordapp.com/emojis/813909256176664586.gif?v=1&size=40 ", "https://cdn.discordapp.com/emojis/830154601877602355.png?v=1&size=40", "https://cdn.discordapp.com/emojis/829171522017951764.gif?v=1&size=40 ", "https://cdn.discordapp.com/emojis/813905618573328414.png?v=1&size=40", "https://cdn.discordapp.com/emojis/830729376458604565.png?v=1&size=40 ", "https://cdn.discordapp.com/emojis/813891899252932620.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/731578139129675877.png?v=1&size=40 ", "https://cdn.discordapp.com/emojis/819393335831560192.png?v=1&size=40", "https://cdn.discordapp.com/emojis/821068793010454638.png?v=1&size=40 ", "https://cdn.discordapp.com/emojis/813920230409502736.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/815563203492053025.png?v=1&size=40", "https://cdn.discordapp.com/emojis/813891297081425951.png?v=1&size=40", "https://cdn.discordapp.com/emojis/785105379515957248.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/830154197289664603.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/829034179823403068.png?v=1&size=40"

    ]

      
const d = [
    "How can mirrors be real if our eyes aren\'t real?",
    "It's true that we don't know what we've got until we lose it, but it's also true that we don't know what we've been missing until it arrives.",
    "Tomorrow is the first day of the rest of your life",
    "The ballparks have gotten too crowded. That's why nobody goes to see the game anymore.\"",
    "The similarities between me and my father are different.",
    "You guys pair up in groups of three, then line up in a circle",
    "I play football. I'm not trying to be a professor. The tests don't seem to make sense to me, measuring your brain on stuff I haven't been through in school.",
    "I'm going to graduate on time, no matter how long it takes.",
    "If I did that, I'd be sticking my head in a moose",
    "Smoking kills, and if you're killed, you've lost a very important part of your life.",
    "\"Who in their right mind would ever need more than 640k of ram!? - Bill Gates 1981\"",
    "The average woman would rather have beauty than brains, because the average man can see better than he can think.",
    "One of the great things about books is sometimes there are some fantastic pictures",
    "Always remember: you're unique, just like everyone else.",
    "The road to success is always under construction.",
    "When everything's coming your way, you're in the wrong lane.",
    "Everybody wants to go to heaven, but nobody wants to die.",
    "He who laughs last, didn't get it.",
    "Half of the people in the world are below average.",
    "Chuck Norris frequently donates blood to the Red Cross. Just never his own.",
    "Middle age is when your age starts to show around your middle.",
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "When it comes to thought, some people stop at nothing.",
    "Happiness is having a large, loving, caring, close-knit family in another city.",
    "Don't tell me the sky is the limit when there are footprints on the moon.",
    "Why do psychics have to ask you for your name?",
    "I get enough exercise pushing my luck.",
    "The more people I meet, the more I like my dog.",
    "There are three kinds of people in this world: those who can count and those who can't.",
    "When life hands you lemons, make lemonade, find the person that life handed vodka to, and have a party.",
    "God created the world, everything else is made in China.",
    "Before you criticize someone, walk a mile in their shoes. That way, you’ll be a mile from them, and you’ll have their shoes.",
    "You never truly understand something unless you can explain it to your grandmother.",
    "Error. No keyboard. Press F1 to continue.",
    "Experience is what you get when you didn’t get what you wanted.",
    "hey occifer i swear to drunk im not as god as you think i am.",
    "Change is good, but dollars are better.",
    "Solution to two of the world’s problem: feed the homeless to the hungry.",
    "When life gives you melons . . . you might be dyslexic.",
    "Those who criticize our generation seem to forget who raised it!",
    "Children in the back seat cause accidents, accidents in the back seat cause children!",
    "How do you know when you are too drunk to drive? When you swerve to miss a tree . . . and then realize it was your air-freshener.",
    "Alcohol, what's that? It's not in my vodkabulary, but let me check in whiskypedia.",
    "I solemnly swear that I am up to no good.",
    "An apple a day keeps anyone anyway, if you throw it hard enough.",
    "When my boss asked me who is the stupid one, me or him? I told him everyone knows he doesn't hire stupid people.",
    "No matter how smart you are you can never convince someone stupid that they are stupid.",
    "A cop pulled me over and told me \"Papers\", so I said \"Scissors, I win!\" and drove off.",
    "If you think your boss is stupid, remember: you wouldn't have a job if he was any smarter.",
    "How can my feet smell if they don't have a nose?",
    "A cop pulled me over and told me \"Papers\", so I said \"Scissors, I win!\" and drove off.",
    "A stupid person laughs three times at a joke; once when everyone else is laughing, a second time when he actually gets the joke, and a third time when he realizes he was laughing without getting the joke at first.",
    "I did not trip and fall. I attacked the floor and I believe I am winning.",
    "You can stop driving me crazy, I can walk from here.",
    "The broccoli says 'I look like a small tree', the mushroom says 'I look like an umbrella', the walnut says 'I look like a brain', and the banana says 'Can we please change the subject?'",
    "I know that I am stupid but when I look around me I feel a lot better.",
    "I never apologize. I’m sorry, but that’s just the way I am..",
    "I put my phone in airplane mode, but it's not flying!",
    "Today I was a hero. I rescued some beer that was trapped in a bottle.",
    "With great power comes an even greater electricity bill.",
    "A computer once beat me at chess, but it was no match for me at kick boxing.",
    "Just because I can't sing doesn't mean that I won't sing.",
    "Stop the earth from spinning, I want to get off!"
];

const gif = g[Math.floor(Math.random() * g.length)];
const deep = d[Math.floor(Math.random() * d.length)];
  // message.channel.send(dare);

 const deepEmbed = new discord.MessageEmbed()
      .setTitle('A Deep Quote For you!')
      .setDescription(deep)
      .setThumbnail(gif)
      // .setImage(message.author.avatarURL())
      .setColor('PURPLE')
      message.channel.send(deepEmbed)


    },
};