const ms = module.require("ms");


module.exports = {
 name: 'count',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}count',
  execute: async(client, message, args) => {
   
    let msg = await message.channel.send(`counting...`);

    let time = '1s'
    setTimeout(function(){
    msg.edit(`3`);
  }, ms(time));

    let time1 = '2s'
    setTimeout(function(){
    msg.edit(`2`);
  }, ms(time1));

    let time2 = '3s'
    setTimeout(function(){
    msg.edit("1");
  }, ms(time2));
let time3 = '4s'
    setTimeout(function(){
    msg.edit("Type your answer now");
  }, ms(time2));
  }
}