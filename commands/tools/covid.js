const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "covid",
  aliases: [],
  category: 'Tools',
  utilisation: '{prefix}covid [country / all]',
  description: "Track a country or worldwide COVID-19 cases",
  execute: async (client, message, args) => {
    let countries = args.join(" ");
    const noArgs = new Discord.MessageEmbed()
      .setTitle('Missing fields')
      .setColor(0xFF0000)
      .setDescription('You are missing some fields (ex: $covid all || $covid India)')
      .setTimestamp()

    if (!args[0]) return message.channel.send(noArgs);

    if (args[0] === "all") {
      fetch(`https://covid19.mathdro.id/api`)
        .then(response => response.json())
        .then(data => {
          let confirmed = data.confirmed.value.toLocaleString()
          let recovered = data.recovered.value.toLocaleString()
          let deaths = data.deaths.value.toLocaleString()

          const embed = new Discord.MessageEmbed()
          .setColor('PURPLE')
            .setTitle(`Worldwide COVID-19 Stats 🌎`)
            .addField('Confirmed Cases', confirmed)
            .addField('Recovered', recovered)
            .addField('Deaths', deaths)
            .setTimestamp()
            .setFooter('Requested by '+message.author.username)

          message.channel.send(embed)
        })
    } else {
      fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
        .then(response => response.json())
        .then(data => {
          let confirmed = data.confirmed.value.toLocaleString()
          let recovered = data.recovered.value.toLocaleString()
          let deaths = data.deaths.value.toLocaleString()

          const embed = new Discord.MessageEmbed()
            .setTitle(`COVID-19 Stats for **${countries}**`)
            .setColor('PURPLE')
            .addField('Confirmed Cases', confirmed)
            .addField('Recovered', recovered)
            .addField('Deaths', deaths)
            .setTimestamp()
            .setFooter('Requested by '+message.author.username)

          message.channel.send(embed)
        }).catch(e => {
          return message.channel.send('Invalid country provided')
        })
    }

  }
};