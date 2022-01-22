module.exports = {
  name: 'guessnumber',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}guessnumber',
  description: "Guess the number Game",
  execute: async (client, message, args) => {
    try{
    const djsGames = require('djs-games')
    const guessTheNumber = new djsGames.GuessTheNumber()
    guessTheNumber.startGame(message)
    }catch(e){
    console.log(e);
    }
  }
}