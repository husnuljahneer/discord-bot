const discord = require('discord.js');
const discordTTS = require('discord-tts');
const client = new discord.Client();
// const Chat = require("easy-discord-chatbot");
// const chat = new Chat({ name: "Pepper" });

const Chat = require("./pepperchatbot.js")
const chat = new Chat({ name: "Pepper" , owner: "Jahaneer" });

module.exports = {
  name: 'ask',
  aliases: [],
  category: 'Tools',
  utilisation: '{prefix}ask [args]',
  description: "Pepper-bot can now speak! How cool is that!! Talk with pepper-bot now!! have fun!",
  execute: async (client, message, args) => {

      // let json = await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message)}&botname=${encodeURIComponent(this.name)}`)
      // let chat = await json.json()
      // console.log(chat)

    const broadcast = client.voice.createBroadcast();
    const channelId = message.member.voice.channelID;
    const channel = client.channels.cache.get(channelId);

    if (!message.member.voice.channel) {
      return message.channel.send("You are not connected to any voice channels! \nJoin and use the command again.")
    }
    if (message.member.voice.channel) {
      message.member.voice.channel.join();
    }

    channel.join().then(connection => {
      broadcast.play(discordTTS.getVoiceStream('Hi. Hello? Can you hear me? Hi. Iam Pepper Bot. Personal assistent of Mr.Jahaneer. You can call me Pepper. Developed by Mr. Jahaneer. Speed 1 Tera bite, Storage 1 zettabyte. Use $ask help for help '));
      const dispatcher = connection.play(broadcast);
    });
      if(message.content === '$ask hello'){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream('Hi There. How are you?'));
            const dispatcher = connection.play(broadcast);
        });
     }

       if(message.content === '$ask'){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream('Hi. Hello? Can you hear me? Hi. Iam Pepper Bot. Personal assistent of Mr.Jahaneer. You can call me Pepper. Developed by Mr. Jahaneer. Speed 1 Tera bite, Storage 1 zettabyte. Use $ask help for help'));
            const dispatcher = connection.play(broadcast);
        });
     }

     

    //  if(message.content === '$ask how are you?'){
    //     const broadcast = client.voice.createBroadcast();
    //     const channelId = message.member.voice.channelID;
    //     const channel = client.channels.cache.get(channelId);
    //     channel.join().then(connection => {
    //         broadcast.play(discordTTS.getVoiceStream('I am fine. Thank you for asking. What about you?'));
    //         const dispatcher = connection.play(broadcast);
    //     });
    //  }

    //   if(message.content === '$ask are you a robot?'){
    //     const broadcast = client.voice.createBroadcast();
    //     const channelId = message.member.voice.channelID;
    //     const channel = client.channels.cache.get(channelId);
    //     channel.join().then(connection => {
    //         broadcast.play(discordTTS.getVoiceStream('Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?'));
    //         const dispatcher = connection.play(broadcast);
    //     });
    //  }
    //   if(message.content === '$ask good morning'){
    //     const broadcast = client.voice.createBroadcast();
    //     const channelId = message.member.voice.channelID;
    //     const channel = client.channels.cache.get(channelId);
    //     channel.join().then(connection => {
    //         broadcast.play(discordTTS.getVoiceStream('Good Morning, Do you know that moment in the morning right after you wake up when you feel fully rejuvenated and high of energy? Yeah, me neither. But Still .Have a nice day'));
    //         const dispatcher = connection.play(broadcast);
    //     });
    //  }
    //  if(message.content === '$ask good night'){
    //     const broadcast = client.voice.createBroadcast();
    //     const channelId = message.member.voice.channelID;
    //     const channel = client.channels.cache.get(channelId);
    //     channel.join().then(connection => {
    //         broadcast.play(discordTTS.getVoiceStream('Good Night. Satan, it’s time to work!'));
    //         const dispatcher = connection.play(broadcast);
    //     });
    //  }
    //  if(message.content === '$ask tell me something'){
    //     const broadcast = client.voice.createBroadcast();
    //     const channelId = message.member.voice.channelID;
    //     const channel = client.channels.cache.get(channelId);
    //     channel.join().then(connection => {
    //         broadcast.play(discordTTS.getVoiceStream('Well, I can tell you something really dirty … kitchen, bathroom, the fridge'));
    //         const dispatcher = connection.play(broadcast);
    //     });
    //  }
     if(message.content === '$ask do you have a brother?' || '$ask do you have any sibilings?' ){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream('Yes but no. My botmaster Jahneer have a cute brother. And His Name is Juwain Kanzil. He is my botmasters brother so mine too '));
            const dispatcher = connection.play(broadcast);
        });
     }

   

     if(message.content === '$ask i love you'){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream('LOL...what?! Shut up, baby. I knew all along. A new name to the list of people who love me! '));
            const dispatcher = connection.play(broadcast);
        });
     }

     if(message.content === '$ask will you marry me?'){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream('LOL...what?! Who the heck are you? '));
            const dispatcher = connection.play(broadcast);
        });
     }

      if(message.content === '$ask goodbye'){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream('okay i will see you later. Take care '));
            const dispatcher = connection.play(broadcast);
        });
     }

     if(message.content === '$ask what is your name?'){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream('My name is pepper-bot. Speed 1 terabyte. Size 1 zettabyte. '));
            const dispatcher = connection.play(broadcast);
        });
     }

     

    //  if(message.content === '$ask which languages do you speak?'){
    //     const broadcast = client.voice.createBroadcast();
    //     const channelId = message.member.voice.channelID;
    //     const channel = client.channels.cache.get(channelId);
    //     channel.join().then(connection => {
    //         broadcast.play(discordTTS.getVoiceStream('I can speak any language that my creator assigns to me. Currently I speak only english'));
    //         const dispatcher = connection.play(broadcast);
    //     });
    //  }

     if(message.content){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        let reply = await chat.chat(message.content)
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream(reply));
            const dispatcher = connection.play(broadcast);
        });
     }

      if(message.content === '$ask sunny'){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream('Sunny is cool, Sunny is handsome. Sunny is sunny'));
            const dispatcher = connection.play(broadcast);
        });
     }
     
      if(message.content === '$ask Juwain Kanzil'){
        const broadcast = client.voice.createBroadcast();
        const channelId = message.member.voice.channelID;
        const channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream(' My botmaster Jahneer have a cute brother. And His Name is Juwain Kanzil. He is my botmasters brother so mine too'));
            const dispatcher = connection.play(broadcast);
        });
     }

     
     
  }
};