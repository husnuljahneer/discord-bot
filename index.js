const fs = require('fs');
const discord = require('discord.js');
const Discord = require('discord.js');
const mongoose = require("mongoose")
const Chat = require("./commands/tools/pepperchatbot")
const chat = new Chat({ name: "Pepper", owner: "WarM4chineRoxX#2013" });
const MusicBot = require('./commands/music/musicplayer');
require('discord-reply');
const client = new discord.Client({ disableMentions: 'everyone', partials: ["MESSAGE", "REACTION"], });
const Levels = require("discord-xp");
const { WelcomerZerotwo } = require("zerotwo-welcomer");
const welcome = new WelcomerZerotwo();
const mongoCurrency = require('discord-mongo-currency-fork');
const db = require("quick.db");
var colors = require('colors');

const MONGO_URI = 'mongodb+srv://dbUser:pepper123@pepperbot.f131q.mongodb.net/pepperbot?retryWrites=true&w=majority';

//welcomer pepper

client.on("guildCreate", guild => {

  let channelID;
  let channels = guild.channels.cache;

  channelLoop:
  for (let key in channels) {
    let c = channels[key];
    if (c[1].type === "text") {
      channelID = c[0];
      break channelLoop;
    }
  }

  let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
  let welxembed = new Discord.MessageEmbed()
    .setColor("DARK_PURPLE")
    .setTitle(':tada: Hi, Pepper Here! Thanks for inviting me into this server!')
    .setDescription('To get started,\n 1. Use `$help` to get the command help panel. 🌶️ \n2.Create `#pepper-bot` channel to talk with pepper! 🍻 \n3.Create `#pepper-aki` to use Akinator 🧠 \n4. Use `$profile`, `$rank` & `$lb` for Levels. 🥇 \n5.Pepper-bot Have Karma system, React to others messages to increase their karma! Check it in `$profile`. 🔺 \n6. There are many `hidden features` in pepper-bot! Like hidden REWARDS, Pepper can `recognise what you sayin` and all. Dig In! Have fun!! 😉')
    .setImage('https://i.imgur.com/EpbeZYr.png')
    .setThumbnail('https://i.imgur.com/KsZ3Xun.png')
    .setFooter('pepper-bot © 2021', 'https://cdn.discordapp.com/emojis/584087991752982538.png?size=64 ');
    channel.send(welxembed)
});

//Welcomer
client.on("guildMemberAdd", async (member) => {
  try {
    let channelID;
    let channels = member.guild.channels.cache;

    channelLoop:
    for (let key in channels) {
      let c = channels[key];
      if (c[1].type === "text") {
        channelID = c[0];
        break channelLoop;
      }
    }

    let channel = member.guild.channels.cache.get(member.guild.systemChannelID || channelID);

    const welcometext = [`A WILD ${member.user.username} APPEARS!`, `Sweet ${member.user.username} is here!`, `Hello ${member.user.username} , and welcome to the server!`, `Rev up those fryers, because ${member.user.username} is here!`, `Shh, here comes ${member.user.username}!`]
    const welcometextR = welcometext[Math.floor(Math.random() * welcometext.length)];

    if (!channel) return;
    let data = await welcome.welcome(member, {
      link: "https://i.imgur.com/ciAtfbV.png",
      text: " ",
      blur: false,
    });

    const attachment = new Discord.MessageAttachment(data, "welcome-image.png");

    channel.send(welcometextR, attachment);
  } catch (e) {
    console.log(e);
  }

});

// Memeber Kick or Left
client.on("guildMemberRemove", async (member) => {
  try {
    let channelID;
    let channels = member.guild.channels.cache;

    channelLoop:
    for (let key in channels) {
      let c = channels[key];
      if (c[1].type === "text") {
        channelID = c[0];
        break channelLoop;
      }
    }

    let channel = member.guild.channels.cache.get(member.guild.systemChannelID || channelID);

    const leavetext = [`${member.user.username} just left the server -RIP! \nPress F to pay respect!`, `${member.user.username} just left the server! \nIs now leaving for no raisin.`, `${member.user.username} just left the server \nIs leaving forever, and means it this time.`, `${member.user.username} just left the server! `]
    const leavetextR = leavetext[Math.floor(Math.random() * leavetext.length)];

    if (!channel) return;
    let data = await welcome.welcome(member, {
      link: "https://i.imgur.com/ciAtfbV.png",
      text: " ",
      blur: false,
    });

    channel.send(leavetextR);
  } catch (e) {
    return console.log(e);
  }

});

//karma system
client.on('messageReactionAdd', async (reaction, user) => {
  try {
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (error) {
        console.error('Something went wrong when fetching the message: ', error);
        return;
      }
    }
    kuser = reaction.message.author;
    kserver = reaction.message.guild;
    db.add(`reaction_${kserver.id}_${kuser.id}`, 1);
    let karmaCount = db.fetch(`reaction_${kserver.id}_${kuser.id}`);
  } catch (e) {
    return console.log(e);
  }
});

client.on('messageReactionRemove', async (reaction, user) => {
  try {
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (error) {
        console.error('Something went wrong when fetching the message: ', error);
        return;
      }
    }
    kuser = reaction.message.author;
    kserver = reaction.message.guild;
    db.subtract(`reaction_${kserver.id}_${kuser.id}`, 1);
    let karmaCount = db.fetch(`reaction_${kserver.id}_${kuser.id}`);
  } catch (e) {
    return console.log(e);
  }
});

//command counter
client.on("message", async (message) => {
  try {
    if (message.channel.type == "dm") {
      let reply = await chat.chat(message.content);
      return message.author.send(reply)
    }
    if (message.author.bot) return;
    let user = message.author;
    var server = message.guild.id;
    db.add(`commandran_${server}_${user.id}`, 1);
    let totalCommands = db.fetch(`commandran_${server}_${user.id}`);
    let pepperCommands = db.fetch(`peppercommands_${server}_${user.id}`);
    let str = message.content;
    if (str.includes('$')) {
      db.add(`peppercommands_${server}_${user.id}`, 1);
    }
    if (pepperCommands % 100 == 0) {
      if (message.author.bot || pepperCommands === null || message.member.id === null || message.guild.id === null) return;
      await mongoCurrency.giveCoins(message.member.id, message.guild.id, 1500)
      await mongoCurrency.giveBankSpace(message.member.id, message.guild.id, 1000)
      let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`:tada: ${user.username} You have Completed 100x (${pepperCommands}) pepper-commands !! \nYour Rewards : **1500₱ & 1000 Bank Space**  `)
      message.channel.send(embed)
    }
  } catch (e) {
    return console.log(e);
  }
});


//levelling
client.on("message", async (message) => {
  try {
    if (!message.guild) return;
    if (message.author.bot) return;
    const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
    if (hasLeveledUp) {
      const user = await Levels.fetch(message.author.id, message.guild.id);
      message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:`);
    }
  } catch (e) {
    return console.log(e);
  }
});

//autochat - chat bot
client.on('message', async message => {
  try {
    if (message.channel.name === "pepper-bot" && !message.author.bot) {
      let str = message.content;
      if (str.includes('$') || str.includes('owo')) {
        return;
      } else {
        let reply = await chat.chat(message.content);
        message.lineReply(reply)
      }
    }
  } catch (e) {
    return console.log(e);
  }
});

//music player
client.musicBot = new MusicBot(client, {
  ytApiKey: 'AIzaSyB-C3C-ri-22HeiTcUKmy5BbAVMXbiXCuQ',
  prefix: `$`,
  language: 'en'
});

client.on('message', async message => {
  try {
    if (message.author.bot) {
      return;
    };
    client.musicBot.onMessage(message);
  } catch (e) {
    return console.log(e);
  }
});

//configurations
client.config = require('./config/bot');
client.emotes = client.config.emojis;

client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

  for (const file of commands) {
    const command = require(`./commands/${dirs}/${file}`);
    console.log(`Loading command ${file}`);
    client.commands.set(command.name.toLowerCase(), command);
  };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.discord.token)

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

