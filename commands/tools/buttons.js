var Discord = require("discord.js");
const Buttons = require("discord-buttons");
const ButtonsMenu = require("discord-menu-embed");
const Client = new Discord.Client();
Buttons(Client);
ButtonsMenu(Client);
Discord.MessageMenu = Buttons.MessageMenu;
Discord.MessageMenuOption = Buttons.MessageMenuOption;
Discord.MessageActionRow = Buttons.MessageActionRow;

module.exports = {
  name: 'button',
  aliases: [],
  category: 'Tools',
  utilisation: '{prefix}button',
  description: "Testing Discord button ",
  execute: async (client, message, args) => {
    var embeds = [], menu = {};
    const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (var i = 0; i < content.length; i++) {
      const embed = new Discord.MessageEmbed();
      embed.setDescription(`ID: ${content[i]}`);
      embeds.push(embed);
    }

    menu.id = "menuyea";
    menu.placeholder = "choose or ban";
    menu.selects = [];
    for (var i = 0; i < content.length; i++) {
      const select = {
        id: `select_${content[i]}`,
        label: `Option ${content[i]} `,
        description: `${content[i]} - select... description..`
      };
      menu.selects.push(select);
    }

    message.channel.menu(message.author.id, {
      embeds: embeds,
      menu: menu
    });
  }
}