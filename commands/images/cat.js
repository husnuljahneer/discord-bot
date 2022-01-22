  
const Commando = require('discord.js-commando');
const request = require('request'); 

const Discord = require("discord.js")

module.exports = {
    name: 'cat',
    aliases: [],
    category: 'Images',
    utilisation: '{prefix}cat',
    description: "Generates meme",
    execute(client, message) {
          request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.MessageEmbed()
                    .setImage(body)
                    .setColor("PURPLE")
                    .setTitle("Here is your random cat")
                              
                   message.channel.send(emb)  
            }
        });
    },
};