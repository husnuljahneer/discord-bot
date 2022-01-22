class GTL {
   
    constructor(options) {
        if(!options.token) throw new TypeError('Missing argument: token')
        if(typeof options.token !== 'string') throw new TypeError('token must be in a string')
        if(!options.stopCommand) throw new TypeError('Missing argument: stopCommand')
        if(typeof options.stopCommand !== 'string') throw new TypeError('stopCommand Must be a string')
        if(!options.message) throw new TypeError('Missing argument: message')
        this.message = options.message;
        this.token = options.token;
        this.winFooter = options.winFooter;
        this.winColor = options.winColor
        this.lostColor = options.lostColor;
        this.lostFooter = options.lostFooter;
        this.questionColor = options.questionColor;
        this.questionFooter = options.questionFooter;
        this.stopCommand = options.stopCommand
      
    }
    async start() {
        const fetch = require("node-fetch")
        const Discord = require('discord.js');
        fetch(`https://api.dagpi.xyz/data/logo`, {
            headers: {
                "Authorization": this.token
            }
        })
        .then(res => res.json())
        .then(data => {
          
    const que = new Discord.MessageEmbed()
    .setTitle(`Guess the Logo!`)
    .addField(`Clue:`,`${data.clue}`, true)
    .addField(`Hint:`, `${data.hint}`)
    .setColor(this.questionColor || "RANDOM")
    .setImage(data.question)
    .setFooter(this.questionFooter || "Made by WarM4chineRoxX#2013")
    

    const right = new Discord.MessageEmbed()
    .setTitle(`You Guessed It Right!`)
    .setAuthor(this.message.author.tag)
    .setURL(data.wiki_url)
    .setColor(this.winColor || "RANDOM")
    .setDescription(`It was ${data.brand}`)
    .setImage(data.answer)
    .setFooter(this.winFooter || "Made by WarM4chineRoxX#2013")
   

    const wrong = new Discord.MessageEmbed()
    .setTitle(`You Lost`)
    .setColor(this.lostColor || "RANDOM")
    .setAuthor(this.message.author.tag)
    .setURL(data.wiki_url)
    .setDescription(`It was ${data.brand}`)
    .setImage(data.answer)
    .setFooter(this.lostFooter || "Made by WarM4chineRoxX#2013")
    

    this.message.channel.send(que)
    const gameFilter = m => m.author.id
    const gameCollector = this.message.channel.createMessageCollector(gameFilter);

    gameCollector.on('collect', async msg => {
      if(msg.author.bot) return
          const selection = msg.content.toLowerCase();
if (selection === data.brand.toLowerCase()) {
this.message.reply(right)
gameCollector.stop()
          }else if (selection === this.stopCommand) {
            this.message.channel.send(wrong)
            gameCollector.stop();
          } else if (selection !== data.brand) {
            this.message.channel.send(`Wrong Guess Try Again! - Type ${this.stopCommand} to cancel the Game`)
          }
    })
    
})
}
}

module.exports = GTL;