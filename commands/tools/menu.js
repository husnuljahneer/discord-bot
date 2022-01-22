const { DiscordMenus, ButtonBuilder, MenuBuilder } = require('discord-menus');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'menu',
  aliases: [],
  category: 'Tools',
  utilisation: '{prefix}menu',
  description: "Testing Discord Menu ",
  execute: async (client, message, args) => {
    const MenusManager = new DiscordMenus(client);

    const myCoolMenu = new MenuBuilder()
      .addLabel('pepper', { description: 'pepper description', value: 'value-1' , emoji: {
          name: '🌶️'}})
      .addLabel('potatoguy', { description: 'potatoguy description', value: 'value-2' , emoji: {
          name: '🥔'}})
      .addLabel('jarvis', {
        description: 'jarvis description', value: 'value-3', emoji: {
          name: '🤖'
        }
      })
      .setCustomID('cool-custom-id')
      .setPlaceHolder('Select an option');


    await MenusManager.sendMenu(message, new MessageEmbed().setDescription('Hello world!'), { menu: myCoolMenu }).catch(err => console.error(err))


    MenusManager.on('MENU_CLICKED', (menu) => {
      menu.reply('some reply')
      console.log(menu.values);
    });
  }
}