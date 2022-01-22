const Canvacord = require("canvacord/src/Canvacord")
const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'slaap',
    category: 'Images',
    description: "Slap Someone",
    usage: '{prefix}slaap [username]',
    execute: async(client, message, args) => {
        const member =  message.mentions.users.first() || message.author;
        const mentionedMemberAvatar = member.displayAvatarURL({dynamic: false, format: "png"})
        const messageAuthorAvatar = message.author.displayAvatarURL({dynamic: false, format: "png"})

        let image = await Canvacord.slap(messageAuthorAvatar, mentionedMemberAvatar)

        let slap = new MessageAttachment(image, "slap.png")

        message.channel.send(slap)
    }
}