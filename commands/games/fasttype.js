module.exports = {
  name: 'fasttype',
  aliases: [],
  category: 'Games',
  utilisation: '{prefix}fasttype',
  description: "Check if you are fast enuf",
  execute: async (client, message, args) => {
    const txtgen = require('txtgen')
    const { FastType } = require('weky')
    const game = new FastType({
      message: message,
      winMessage: "GG you won!", //message sent when user types perfectly
      sentence: txtgen.sentence(), //sentence-to-be-typed
      loseMessage: 'Lost ;(', //message sent when user misspell it
      time: 50000, //time that user has to type in ms
      startMessage: 'Good Luck!' //message sent when user starts playing
    })
    game.start()
  }
}