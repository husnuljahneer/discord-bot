const ms = module.require("ms");
const discord = require('discord.js')

module.exports = {
  name: 'fivesec',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}hack',
  description: "Play 5 second rule",
  execute: async (client, message, args) => {

    let msg = await message.channel.send(`Starting 5 Second rule Game`);
    let reactmsg = await message.channel.send(`Waiting for user to react`);

    let time = '1s'
    setTimeout(function() {
      msg.edit(`Your question in : 3`);
    }, ms(time));

    let time1 = '2s'
    setTimeout(function() {
      msg.edit(`Your question in : 2`);
    }, ms(time1));

    let time2 = '3s'
    setTimeout(function() {
      msg.edit("Your question in : 1");
    }, ms(time2));

    let time3 = '4s'
    setTimeout(function() {

      let ques = [
        'Name 3 completely useless things that you have in your house', 'Name 3 toppings you think shouldn’t go on pizza', 'Name 3 famous aliens', 'Name 3 movies that you found were a complete waste of time', 'Name 3 odd objects you used to eat as a kid', 'Name 3 people dumber than you', 'Name 3 Pokémons', 'Name 3 reasons why you get diarrhea', 'Name 3 songs that annoy you', 'Name 3 things that always make you laugh', 'Name 3 things that can make you go woooohooooo!', 'Name 3 things that annoyed your parents', 'Name 3 bad habits you have', 'Name 3 actors named Kevin', 'Name 3 elements from the periodic table', 'Name 3 animals that start with a letter D', 'Name 3 animals that start with a letter A', 'Name 3 animals that start with a letter H', 'Name 3 Greek Gods', 'Name 3 names with only 3 letters in them', 'Name 3 black things', 'Name 3 things you can cook', 'Name 3 sports where something is thrown', 'Name 3 things you often forget at home', 'Name 3 things you arent allowed to do at a job interview', 'Name 3 famous Michaels', 'Name 3 planets', 'Name 3 things you cant do in the dark', 'Name 3 things you cant do during day time', 'Name 3 apps you cant live without', 'Name 3 things are funny', 'Name 3 things you do before you go to bed', 'Name 3 vegetables', 'Name 3 YouTubers', 'Name 3 Friends Characters ', 'Name 3 Things you cant live without', 'Name 3 Members of One Direction', 'Name 3 Common Fears', 'Name 3 tasks on Among Us', 'Name 3 STDs', 'Name 3 things that are yellow', 'Name 3 things that are blue', 'Name 3 things that are Red', 'Name 3 things that are orange', 'Name 3 things that are white', 'Name 3 things that are green', 'Name 3 things that are black', 'Name 3 things that are purple', 'Name 3 Female Musicians', 'Name 3 Types of milk', 'Name 3 Currencies ', 'Name 3 foods that have cheese', 'Name 3 modes of transport', 'Name 3 types of haircut', 'Name 3 things you do in a shower', 'Name 3 types of jewellery', 'Name 3 things you would find in a cinema', 'Name 3 things that rhyme with bush', 'Name 3 things you do before you go to bed', 'Make 3 different animal sounds', 'Name 3 words in spanish', 'Name 3 sports involving a ball', 'Name 3 things you wouldnt want to find in your house', 'Name 3 songs you sing in the shower', 'Name 3 animals you would have as pets', 'Say 3 Names you would call your partner', 'Name 3 things you shouldnt do on cinemas', 'Name 3 reasons for being late', 'Name 3 celebrities you have had a crush on', 'Name 3 things you would steal from a hotel room', 'Name 3 you do in a car', 'Name 3 things you do on a date', 'Name 3 Singers', 'Name 3 that are on your computer', 'Name 3 words that starts with I', 'Name 3 Multiples of 9', 'Name 3 Shoe Brands', 'Name 3 things you would find under a sofa', 'Name 3 vegetables that are green', 'Name 3 boys name starting with M', 'Name 3 girls name starting with M', 'Name 3 shows you have completed watching', 'Name 3 things you cant resist', 'Name 3 things you can cover chocolates with', 'Name 3 things you cannot live without', 'Name 3 things that brings you joy', 'Name 3 things that you do in a car', 'Name 3 things that you should never do in a car']

      const g = [
        "https://cdn.discordapp.com/emojis/731580131193389109.png?v=1&size=40", "https://cdn.discordapp.com/emojis/782110122788126740.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/781228541948723260.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/829165184621740072.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/829034048282165278.png?v=1&size=40", "https://cdn.discordapp.com/emojis/782131206619004979.png?v=1&size=40", "https://cdn.discordapp.com/emojis/815563203492053025.png?v=1&size=40", "https://cdn.discordapp.com/emojis/785105379515957248.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/829034179823403068.png?v=1&size=40", "https://cdn.discordapp.com/emojis/830154197289664603.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/813891297081425951.png?v=1&size=40", "https://cdn.discordapp.com/emojis/813909256176664586.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/830154601877602355.png?v=1&size=40", "https://cdn.discordapp.com/emojis/829171522017951764.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/813905618573328414.png?v=1&size=40", "https://cdn.discordapp.com/emojis/830729376458604565.png?v=1&size=40", "https://cdn.discordapp.com/emojis/813891899252932620.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/731578139129675877.png?v=1&size=40", "https://cdn.discordapp.com/emojis/819393335831560192.png?v=1&size=40", "https://cdn.discordapp.com/emojis/821068793010454638.png?v=1&size=40", "https://cdn.discordapp.com/emojis/813920230409502736.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/815563203492053025.png?v=1&size=40", "https://cdn.discordapp.com/emojis/813891297081425951.png?v=1&size=40", "https://cdn.discordapp.com/emojis/785105379515957248.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/830154197289664603.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/829034179823403068.png?v=1&size=40",
        "https://cdn.discordapp.com/emojis/766656632276779068.png?v=1&size=40", "https://cdn.discordapp.com/emojis/853009749393932299.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/557824378969128970.png?v=1&size=40", "https://cdn.discordapp.com/emojis/645944845696892948.png?v=1&size=40", "https://cdn.discordapp.com/emojis/584087400133689355.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/581722250500374540.png?v=1&size=40", "https://cdn.discordapp.com/emojis/557705277521133578.png?v=1&size=40", "https://cdn.discordapp.com/emojis/593618826814554170.gif?v=1&size=40", "https://cdn.discordapp.com/emojis/661283282251546636.png?v=1&size=40", "https://cdn.discordapp.com/emojis/615619604496252948.png?v=1&size=40", "https://cdn.discordapp.com/emojis/804977562245529640.png?v=1&size=40", "https://cdn.discordapp.com/emojis/690264745424846903.png?v=1&size=40", "https://cdn.discordapp.com/emojis/582388547751772165.png?v=1&size=40", "https://cdn.discordapp.com/emojis/676954008270929942.png?v=1&size=40", "https://cdn.discordapp.com/emojis/601376647093944321.png?v=1&size=40", "https://cdn.discordapp.com/emojis/646557047801774100.png?v=1&size=40", "https://cdn.discordapp.com/emojis/819609240507121756.png?v=1&size=40", "https://cdn.discordapp.com/emojis/582219243035164672.png?v=1&size=40",
      ]

      let gif = g[Math.floor(Math.random() * g.length)];
      let quesR = ques[Math.floor(Math.random() * ques.length)];

      const fiveEmbed = new discord.MessageEmbed()
        .setTitle(quesR)
        .setThumbnail(gif)
        .setColor('PURPLE')

      message.channel.send(fiveEmbed)

    }, ms(time3));

    let time4 = '5s'
    setTimeout(function() {
      msg.edit("Timeout in : 5s");
    }, ms(time4));

    let time5 = '6s'
    setTimeout(function() {
      msg.edit("Timeout in : 4s");
    }, ms(time5));

    let time6 = '7s'
    setTimeout(function() {
      msg.edit("Timeout in : 3s");

      reactmsg.react('👍')
      const filter = (reaction, user) => {
        return ['👍'].includes(reaction.emoji.name) && user.id === message.author.id && !user.bot;
      };
      reactmsg.awaitReactions(filter, { max: 1, time: 15000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === '👍') {
            reactmsg.edit('User answered in 3 seconds!')
            return;
          }
        })
        .catch(collected => {
          reactmsg.edit('User Didnt react 🤔');
        });

    }, ms(time6));

    let time7 = '8s'
    setTimeout(function() {
      msg.edit("Timeout in : 2s");

      reactmsg.react('👍')
      const filter = (reaction, user) => {
        return ['👍'].includes(reaction.emoji.name) && user.id === message.author.id && !user.bot;
      };
      reactmsg.awaitReactions(filter, { max: 1, time: 15000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === '👍') {
            reactmsg.edit('User answered in 4 seconds!')
            return;
          }
        })
        .catch(collected => {
          reactmsg.edit('User Didnt react 🤔');
        });


    }, ms(time7));

    let time8 = '9s'
    setTimeout(function() {
      msg.edit("Timeout in : 1s");

      reactmsg.react('👍')
      const filter = (reaction, user) => {
        return ['👍'].includes(reaction.emoji.name) && user.id === message.author.id && !user.bot;
      };
      reactmsg.awaitReactions(filter, { max: 1, time: 15000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === '👍') {
            reactmsg.edit('User answered in 4.96 seconds!')
            return;
          }
        })
        .catch(collected => {
          reactmsg.edit('User Didnt react 🤔');
        });
    }, ms(time8));

    let time9 = '10s'
    setTimeout(function() {
      msg.edit(`TIMEOUT`);
      msg.react('🛑');
    }, ms(time9));



  }
}