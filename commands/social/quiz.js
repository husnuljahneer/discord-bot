const { PagesManager } = require("discord.js-pages")
const { MessageEmbed } = require("discord.js");
const Tinder = require('../../models/tinder.js');
const questions = require('../../data/tinder-questions.js')

const pagesManager = new PagesManager()


module.exports = {
  name: "start-quiz",
  aliases: ["av"],
  category: '',
  utilisation: '{prefix}quiz',
  description: "",
  execute: async (client, message, args) => {
    const author = message.author.username

    const channelName = `matchup-${author}`.toLowerCase()

    if (message.channel.name != channelName) {
      return message.channel.send('Wrong Channel')
    }

    const deleteChannel = () => {
      //code to delete channel
    }

    const saveUserAnswers = (answers) => {
      const newTinder = new Tinder({
        guildID: message.guild.id,
        userID: message.author.id,
        answers: answers
      })
      newTinder.save()
        .then(
          result => {
            console.log(result)
            deleteChannel()
          }
        )
        .catch(e => console.log(e))

    }

    pagesManager.middleware(message)
    let answers = []
    let result

    const GenerateResult = async (questionNumber, answer) => {
      if (!result) {
        result = await message.channel.send('.')
      }
      let resultText = ''
      questions.map((question, index) => {
        let answer = question.options[answers[index]]
        if (!answer) {
          answer = 'None'
        }
        resultText = `${resultText}  ${question.title}  **${answer}** \n`
      })
      const resultEmbed = new MessageEmbed().setTitle('Result').setDescription(resultText)
      result.edit(resultEmbed)
    }

    const builder = message.pagesBuilder()

    builder.setDefaultButtons([{ "back": "👈" }, { "next": "👉" }])

    //map block
    questions.map((question, index) => {

      let options = `
			1️⃣ - ${question.options[0]}

			2️⃣ -	${question.options[1]}

			3️⃣ - ${question.options[2]}

			4️⃣ - ${question.options[3]}
			`

      builder.addPages([
        new MessageEmbed()
          .setTitle(question.title)
          .setDescription(options)
      ])
    })
    //end of map
    builder.addTriggers([
      {
        emoji: "1️⃣",
        callback: () => {
          builder.getPage(2).then(page => {
            pagenumber = Number(page.footer.text.split('/')[0] - 1)
            answers[pagenumber] = 0
            GenerateResult(pagenumber, 0)
          }
          )
        }
      }
    ])
    builder.addTriggers([
      {
        emoji: "2️⃣",
        callback: () => {
          builder.getPage(2).then(page => {
            pagenumber = Number(page.footer.text.split('/')[0] - 1)
            answers[pagenumber] = 1
            GenerateResult(pagenumber, 1)
          }
          )
        }
      }
    ])

    builder.addTriggers([
      {
        emoji: "3️⃣",
        callback: () => {
          builder.getPage(2).then(page => {
            pagenumber = Number(page.footer.text.split('/')[0] - 1)
            answers[pagenumber] = 2
            GenerateResult(pagenumber, 2)
          }
          )
        }
      }
    ])

    builder.addTriggers([
      {
        emoji: "4️⃣",
        callback: () => {
          builder.getPage(2).then(page => {
            pagenumber = Number(page.footer.text.split('/')[0] - 1)
            answers[pagenumber] = 3
            GenerateResult(pagenumber, 3)
          })
        }
      }
    ])

    builder.addTriggers([
      {
        emoji: "🛑",
        callback: () => {

          if (answers.length === questions.length && !answers.includes(undefined)) {
            saveUserAnswers(answers)
            message.channel.send('**End of Quiz**')
            builder.stopListen()
          }
          else {
            message.channel.send('**BAKA! All Questions need to be answered you stupid, Retard**')
          }


        }
      }
    ])


    builder.build()

  }
}
