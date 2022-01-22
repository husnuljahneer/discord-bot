const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const db = require("quick.db");
const Levels = require('discord-xp')
const { splitBar, filledBar } = require('string-progressbar');
require('discord-reply');
const mongoCurrency = require('discord-mongo-currency-fork');

module.exports = {
  name: 'profile',
  aliases: [],
  category: 'Economy',
  utilisation: '{prefix}profile',
  description: "View your PepperProfile",
  execute: async (client, message, guild) => {
    try{
      //Variables and Declarations
    let user = message.author;
    var server = message.guild.id;
    const target = message.author;
    const { name } = guild
    const userID = await Levels.fetch(target.id, message.guild.id, true);
    const member = message.member;
    const userEco = await mongoCurrency.findUser(member.id, message.guild.id); // Get the user from the database.
    let dbfetch = db.fetch(`commandran_${server}_${user.id}`);
    let pepperCommands = db.fetch(`peppercommands_${server}_${user.id}`);
    let karmaCount = db.fetch(`reaction_${server}_${user.id}`);
    // console.log(karmaCount)
    var currentcheck = pepperCommands
    // console.log(currentcheck)
    //Check conditions
    
    if (currentcheck < 100) {
      var total = 100;
      const filled = filledBar(total, currentcheck, 15);
      const profileEmbed = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle(target.username + ` 's Pepper-Profile`)
        .setAuthor('Welcome Aboard', 'https://i.imgur.com/fYHeeJE.png')
        .setDescription('𝙻𝙴𝚅𝙴𝙻 𝟷 🌟 [ℛℴ𝒸𝓀𝓈𝓉𝒶𝓇 ℛℴℴ𝓀𝒾ℯ]\n Bright Beginning Award - Well begun is half done, they say. ')
        .setThumbnail('https://media.giphy.com/media/13VLdHIQRb8zQc/giphy.gif')
        .addFields(
          { name: '**Badges unlocked** ', value: `🌟\n` ,inline:true},
          { name: 'Progress', value: "[" + filled[0] + "]  " ,inline:true},
          { name: '\u200B', value: '\u200B' },
          { name: 'Money :coin: ', value: `**${userEco.coinsInWallet} ₱**`, inline: true },
          { name: 'Bank :bank:', value: `**${userEco.coinsInBank} ₱**`, inline: true },
          { name: 'Karma 🔺', value: `${karmaCount}`, inline: true },
          { name: 'Total Messages Sent (This Guild) ', value: `**` + dbfetch + ` 💬**`, inline: true },
          { name: 'Total Pepper Commands Issued ', value: `**` + pepperCommands + ` 🎉**`, inline: true },
          { name: `Guild Rank (` + message.guild.name + `) `, value: `**` + userID.position + ` 🎖️**`, inline: true },
          { name: `Vote (Voting Rewards Will be added Soon)`, value: `[Vote](https://discordbotlist.com/bots/pepper) \n\n**[Click here for a Surprise](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**\n Use Pepper Bot Commands to Level Up ! \nEvery 100x Commands will reward you 1500₱ coins & 1000 Bank Space!\n` },
          {name:`What can you buy with pepper money?`,value:`You can buy Rank backgrounds, Virtual Flowers, Pet, eCards, Virtual hugs and More! Right From the pepper Website or Using the Pepper-Bot ( This Feature is currently under development)`}
        )
        .setImage('https://i.imgur.com/WJPWZHR.png')
        .setFooter('For more info use $profile help');

     return message.channel.send(profileEmbed);
    } else if (currentcheck >= 100 && currentcheck < 1000) {
      var total = 1000;
      const filled = filledBar(total, currentcheck, 15);
      const profileEmbed = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle(target.username + ` 's Pepper-Profile`)
        .setAuthor('Welcome Aboard', 'https://i.imgur.com/fYHeeJE.png')
        .setDescription('𝙻𝙴𝚅𝙴𝙻 2 🔱 [𝒞𝓇𝓊𝒾𝓈𝒾𝓃𝑔 𝒶𝓃𝒹 𝒞𝓇𝓊𝓈𝒽𝒾𝓃𝑔 𝒾𝓉]\n You are doing your job well, particularly well. ')
        .setThumbnail('https://media.giphy.com/media/pKt7w9ILVOdWw/giphy.gif')
        .addFields(
          { name: '**Badges unlocked** ', value: `🌟 🔱 \n` ,inline:true},
          { name: 'Progress', value: "[" + filled[0] + "]  " ,inline:true},
          { name: '\u200B', value: '\u200B' },
          { name: 'Money :coin: ', value: `**${userEco.coinsInWallet} ₱**`, inline: true },
          { name: 'Bank :bank:', value: `**${userEco.coinsInBank} ₱**`, inline: true },
          { name: 'Karma 🔺', value: `${karmaCount}`, inline: true },
          { name: 'Total Messages Sent (This Guild) ', value: `**` + dbfetch + ` 💬**`, inline: true },
          { name: 'Total Pepper Commands Issued ', value: `**` + pepperCommands + ` 🎉**`, inline: true },
          { name: `Guild Rank (` + message.guild.name + `) `, value: `**` + userID.position + ` 🎖️**`, inline: true },
          { name: `Vote (Voting Rewards Will be added Soon)`, value: `[Vote](https://discordbotlist.com/bots/pepper) \n\n**[Click here for a Surprise](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**\n Use Pepper Bot Commands to Level Up ! \nEvery 100x Commands will reward you 1500₱ coins & 1000 Bank Space!\n` },
          {name:`What can you buy with pepper money?`,value:`You can buy Rank backgrounds, Virtual Flowers, Pet, eCards, Virtual hugs and More! Right From the pepper Website or Using the Pepper-Bot ( This Feature is currently under development)`}
        )
        .setImage('https://i.imgur.com/WJPWZHR.png')
        .setFooter('For more info use $profile help');

     return message.channel.send(profileEmbed);
    } else if (currentcheck >= 1000 && currentcheck < 2000) {
      var total = 2000;
      const filled = filledBar(total, currentcheck, 15);
      const profileEmbed = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle(target.username + ` 's Pepper-Profile`)
        .setAuthor('Welcome Aboard', 'https://i.imgur.com/fYHeeJE.png')
        .setDescription('𝙻𝙴𝚅𝙴𝙻 3 🗡️ [𝐻𝒾𝑔𝒽𝑒𝓈𝓉 𝑜𝒻 𝐻𝒾𝑔𝒽 𝐹𝒾𝓋𝑒𝓈]\n To the absolute pro when it comes to attendance goes this award. Aces All Day Award - The award for the attendee who aces it all day, day in and day out. All Day Everyday Award. You earned it! ')
        .setThumbnail('https://media.giphy.com/media/d7id4BY2NQnJe/giphy.gif')
        .addFields(
          { name: '**Badges unlocked** ', value: `🌟 🔱 🗡️\n` ,inline:true},
          { name: 'Progress', value: "[" + filled[0] + "]  " ,inline:true},
          { name: '\u200B', value: '\u200B' },
          { name: 'Money :coin: ', value: `**${userEco.coinsInWallet} ₱**`, inline: true },
          { name: 'Bank :bank:', value: `**${userEco.coinsInBank} ₱**`, inline: true },
          { name: 'Karma 🔺', value: `${karmaCount}`, inline: true },
          { name: 'Total Messages Sent (This Guild) ', value: `**` + dbfetch + ` 💬**`, inline: true },
          { name: 'Total Pepper Commands Issued ', value: `**` + pepperCommands + ` 🎉**`, inline: true },
          { name: `Guild Rank (` + message.guild.name + `) `, value: `**` + userID.position + ` 🎖️**`, inline: true },
          { name: `Vote (Voting Rewards Will be added Soon)`, value: `[Vote](https://discordbotlist.com/bots/pepper) \n\n**[Click here for a Surprise](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**\n Use Pepper Bot Commands to Level Up ! \nEvery 100x Commands will reward you 1500₱ coins & 1000 Bank Space!\n` },
          {name:`What can you buy with pepper money?`,value:`You can buy Rank backgrounds, Virtual Flowers, Pet, eCards, Virtual hugs and More! Right From the pepper Website or Using the Pepper-Bot ( This Feature is currently under development)`}
        )
        .setImage('https://i.imgur.com/WJPWZHR.png')
        .setFooter('For more info use $profile help');

     return message.channel.send(profileEmbed);
    } else if (currentcheck >= 2000 && currentcheck < 3500) {
      var total = 3500;
      const filled = filledBar(total, currentcheck, 15);
      const profileEmbed = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle(target.username + ` 's Pepper-Profile`)
        .setAuthor('Welcome Aboard', 'https://i.imgur.com/fYHeeJE.png')
        .setDescription('𝙻𝙴𝚅𝙴𝙻 4 🛡️ [𝒫𝓇𝑒𝓈𝒾𝒹𝑒𝓃𝓉’𝓈 𝒞𝒾𝓇𝒸𝓁𝑒ℯ]\n No Words Mate! YOU ARE THE BEST, ONLY ONE MORE LEVEL TO GO!! ')
        .setThumbnail('https://media.giphy.com/media/U7oYLyQqXM9sA/giphy.gif')
        .addFields(
          { name: '**Badges unlocked** ', value: `🌟 🔱 🗡️ 🛡️\n` ,inline:true},
          { name: 'Progress', value: "[" + filled[0] + "]  " ,inline:true},
          { name: '\u200B', value: '\u200B' },
          { name: 'Money :coin: ', value: `**${userEco.coinsInWallet} ₱**`, inline: true },
          { name: 'Bank :bank:', value: `**${userEco.coinsInBank} ₱**`, inline: true },
          { name: 'Karma 🔺', value: `${karmaCount}`, inline: true },
          { name: 'Total Messages Sent (This Guild) ', value: `**` + dbfetch + ` 💬**`, inline: true },
          { name: 'Total Pepper Commands Issued ', value: `**` + pepperCommands + ` 🎉**`, inline: true },
          { name: `Guild Rank (` + message.guild.name + `) `, value: `**` + userID.position + ` 🎖️**`, inline: true },
          { name: `Vote (Voting Rewards Will be added Soon)`, value: `[Vote](https://discordbotlist.com/bots/pepper) \n\n**[Click here for a Surprise](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**\n Use Pepper Bot Commands to Level Up ! \nEvery 100x Commands will reward you 1500₱ coins & 1000 Bank Space!\n` },
          {name:`What can you buy with pepper money?`,value:`You can buy Rank backgrounds, Virtual Flowers, Pet, eCards, Virtual hugs and More! Right From the pepper Website or Using the Pepper-Bot ( This Feature is currently under development)`}
        )
        .setImage('https://i.imgur.com/WJPWZHR.png')
        .setFooter('For more info use $profile help');
     return message.channel.send(profileEmbed);
    } else if (currentcheck >= 3500 && currentcheck < 7000) {
      var total = 7000;
      const filled = filledBar(total, currentcheck, 15);
      const profileEmbed = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle(target.username + ` 's Pepper-Profile`)
        .setAuthor('Welcome Aboard', 'https://i.imgur.com/fYHeeJE.png')
        .setDescription('𝙻𝙴𝚅𝙴𝙻 5 👑 [𝒫𝑒𝓅𝓅𝑒𝓇 𝒸𝓇𝑜𝓌𝓃ℯ]\n No Words Mate! YOU ARE THE BEST !! ')
        .setThumbnail('https://media.giphy.com/media/xRCASav6bgz9m/giphy.gif')
         .addFields(
          { name: '**Badges unlocked** ', value: `🌟 🔱 🗡️ 👑\n` ,inline:true},
          { name: 'Progress', value: "[" + filled[0] + "]  " ,inline:true},
          { name: '\u200B', value: '\u200B' },
          { name: 'Money :coin: ', value: `**${userEco.coinsInWallet} ₱**`, inline: true },
          { name: 'Bank :bank:', value: `**${userEco.coinsInBank} ₱**`, inline: true },
          { name: 'Karma 🔺', value: `${karmaCount}`, inline: true },
          { name: 'Total Messages Sent (This Guild) ', value: `**` + dbfetch + ` 💬**`, inline: true },
          { name: 'Total Pepper Commands Issued ', value: `**` + pepperCommands + ` 🎉**`, inline: true },
          { name: `Guild Rank (` + message.guild.name + `) `, value: `**` + userID.position + ` 🎖️**`, inline: true },
          { name: `Vote (Voting Rewards Will be added Soon)`, value: `[Vote](https://discordbotlist.com/bots/pepper) \n\n**[Click here for a Surprise](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**\n Use Pepper Bot Commands to Level Up ! \nEvery 100x Commands will reward you 1500₱ coins & 1000 Bank Space!\n` },
          {name:`What can you buy with pepper money?`,value:`You can buy Rank backgrounds, Virtual Flowers, Pet, eCards, Virtual hugs and More! Right From the pepper Website or Using the Pepper-Bot ( This Feature is currently under development)`}
        )
        .setImage('https://i.imgur.com/WJPWZHR.png')
        .setFooter('For more info use $profile help');
      return message.channel.send(profileEmbed);
    } else {
      return;
    }

    if(message.content == "$profile help"){
      return message.lineReply('Use $help to see the available Commands. Using these Commands will help you level up!');
    }
    }catch(e){
      return console.log(e);
    }
    

  }
};