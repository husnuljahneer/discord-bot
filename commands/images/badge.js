const Discord = module.require("discord.js");

module.exports = {
     name: 'badge',
    aliases: [],
    category: 'Images',
    utilisation: '{prefix}badge [username]',
    description: "Get a random badge",
    execute: async(client, message, args) => {
   let user = message.mentions.users.array()[0]
   const randomnumber = [1,2,3,4,5]
   const rn = randomnumber[Math.floor(Math.random() * randomnumber.length)];

   if (!user) return message.channel.send('Please mention a user to check')

  
    if(user){
    
    const embed = new Discord.MessageEmbed()
      .setImage(`https://robohash.org/${user}?set=set${rn}`)
      .setTitle(`Your Random Avatar`)
      .setFooter(`Requested by ${user}`)
      .setTimestamp()
      message.channel.send(embed);
    }
    }
    
}