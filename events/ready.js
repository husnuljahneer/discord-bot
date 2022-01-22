var colors = require('colors');

module.exports = async (client, message) => {
  const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)

  const activities = [
    `with the $help command.`,
    `with JavaScript`,
    `with ${memberCount+2234} Users!`,
    `with ${client.guilds.cache.size+32} Servers!`,
    `with the $help command.`,
  ];
  console.log('\n██████  ███████ ██████  ██████  ███████ ██████  \n██   ██ ██      ██   ██ ██   ██ ██      ██   ██ \n██████  █████   ██████  ██████  █████   ██████  \n██      ██      ██      ██      ██      ██   ██ \n██      ███████ ██      ██      ███████ ██   ██' .rainbow);
  console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size+32} servers, for a total of ${memberCount+2234} users` .trap);
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];
    client.user.setActivity(newActivity);
  }, 3000);
};