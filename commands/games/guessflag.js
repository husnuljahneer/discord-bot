module.exports = {
  name: 'guessflag',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}guessflag',
  description: "Guess the flag Game",
  execute: async (client, message, args) => {
    try{
    const GTF = require('./guesstheflag.js')
    const game = new GTF({
    message: message,
    token: "MTYyNTQ1MTk0Mg.fDJAOv9BAoSlEs7xEViWTJbzV8OlMR4a.11734090fb14aae9", // *Required!! Get Your Api Token at https://dagpi.xyz/dashboard 
    stopCommand: "stop", // *Required!!
    winFooter: "You Win!", // Set The Footer of the win message
    winColor: "GREEN", // The embed color of the win message
    loseFooter: "You Lose!", // Set The Footer of the lose message
    loseColor: "RED", // The embed color of the lose message
    questionFooter: "Guess the Flag!", // Set The Footer of the question message
    questionColor: "BLUE", // The embed color of the question message
    })
    game.start()
    }catch(e){
      console.log(e);
    }
  }
}