

module.exports = {
  name: 'smoke',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}smoke',
  description: "Smoke a cigaaaaaaar",
  execute: async (client, message, args) => {

    message.channel.send('**BISSSSHES IM SMOKING**').then(async message => {
      setTimeout(() => {
        message.edit('🚬');
      }, 500);
      setTimeout(() => {
        message.edit('🚬 ☁ ');
      }, 1000);
      setTimeout(() => {
        message.edit('🚬 ☁☁ ');
      }, 1500);
      setTimeout(() => {
        message.edit('🚬 ☁☁☁ ');
      }, 2000);
      setTimeout(() => {
        message.edit('🚬 ☁☁');
      }, 2500);
      setTimeout(() => {
        message.edit('🚬 ☁');
      }, 3000);
      setTimeout(() => {
        message.edit('🚬 ');
      }, 3500);
      setTimeout(() => {
        message.edit(`J'ai fini !`);
      }, 4000);

    });
  },
};