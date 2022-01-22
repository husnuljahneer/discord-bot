const Discord = module.require("discord.js");
const axios = require("axios");

module.exports = {
  name: "animecharacter",
  aliases: [],
  category: 'Anime',
  utilisation: '{prefix}animecharacter <args>',
  description: "Search for an Anime character",
  execute: async (client, message, args) => {
    try{
       var arr = axios
            .get('https://anime.rovi.me/list')
            .then((res) => {
                arr = []
                res.data.characters.forEach(c => {
                    arr.push(c['full name'])
                });
                return arr
            })
    
    switch (args[0]) {
        case "random":
          axios
            .get(`https://anime.rovi.me/random`)
            .then((res) => {
              const embed = new Discord.MessageEmbed()
                .setImage(res.data.url)
                .setColor("PURPLE")
                .setFooter(
                  `Requested by ${message.author.tag}`,
                  message.author.displayAvatarURL({
                    dynamic: true,
                    size: 2048,
                    format: "png",
                  })
                );
              message.channel.send(embed);
            })
            .catch((err) => {
              return message.channel.send('It apears that there was an error. Please try again later.')
            });
          break;
        case "list":
            arr.then(arr => {
                const embed = new Discord.MessageEmbed()
            .setTitle("Available Characters")
            .setDescription(arr.join('\n'))
            .setColor("PURPLE")
            .setFooter(
              `Requested by ${message.author.tag}`,
              message.author.displayAvatarURL({
                dynamic: true,
                size: 2048,
                format: "png",
              })
            );
          return message.channel.send(embed);
            })
          
          break;
        default:
          arr.then(arr => {
              var checker = []
              arr.forEach(c => checker.push(c.toLowerCase()))
              if(!checker.includes(args.join(' ').toLowerCase())) return message.channel.send(`That character isn't in the list, please do \`animecharacter list\` to check`)
                
              });

              axios
              .get(`https://anime.rovi.me/random?c=${args.join('+')}`)
              .then((res) => {
                  let embed = new Discord.MessageEmbed()
                  .setImage(res.data.url)
                  .setTitle(`Random picture of ${args.join(' ')}`)
                  .setColor("PURPLE")
                  .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                      dynamic: true,
                      size: 2048,
                      format: "png",
                    })
                  );
                  return message.channel.send(embed)
              })
    }
    }catch(e){
      return console.log(e);
    }
      
  }
}