
const discord = require('discord.js')

module.exports = {
    name: 'rate',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}rate [username]',
    description: "Rate someone | Another fun command",
    execute(client, message,args) {
       let answers = [
        //Postive
        "💯", "Yes", "me likey", "👀", "😍😍", "he's cool yea", "she's cool yea", "uhhhh yes", "indede", "would bang", "my favorite", "pretty good", "music to my ears",
        "dreamy", "Cool", "at least it's not bad", "not the best but still good", "AMAZING", "dude, that's like, awesome",
        `they're cute `, "underrated",

        //Negative
        "how about no", "yeah no", "needs much improvement", "barely ok, in short it's shit", "💩 basically", "just horrible", "never ask me to rate that again", "overrated",
        "nobody wants to see that", "i disapprove", "i'm not allowed to say", "that's goodn't", "oh no", "very uhh, how do i say this without sounding rude", "might as well throw it away",
        `this makes me wanna `, `what!! `, `you better be joking`
    ];
    let user = message.mentions.users.array()[0]
    let answer = answers[Math.floor(Math.random() * answers.length)];

    if (!user) return message.channel.send('Please mention a user to rate')

    
    if(user){
      message.channel.send(answer);
    }
    },
};