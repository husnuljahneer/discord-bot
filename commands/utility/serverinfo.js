const Discord = require('discord.js');
module.exports = {
  name: 'serverinfo',
  aliases: [],
  category: 'Utility',
  utilisation: '{prefix}serverinfo',
  description: "Get complete serverinfo",
  execute(client, message) {
const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )
      .setColor('PURPLE')
      .setFooter("Requested by "+message.author.username)
      .setTimestamp()

    message.channel.send(embed)
    }
};
