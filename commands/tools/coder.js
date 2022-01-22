const Discord = require("discord.js");
var request = require("request");
const runCode = require("jdoodlecoderunner")

module.exports = {
  name: "coder",
  aliases: [],
  category: 'Tools',
  utilisation: '{prefix}coder',
  description: "Execute C, Python codes in discord",
  execute: async (client, message, args) => {
    const prefix = "$coder ";
    let state = "disabled"
    if (state === "disabled") {
      return message.channel.send("Disabled for Fixing")
    }
    client.on("message", async (message) => {
      try {
        let args = message.content.substring(prefix.length).split(" ");
        switch (args[0]) {
          case "run":
            var input = "";
            var language, index;
            if (args[1] == "C" || args[1] == "c") {
              language = "c";
              index = "0";
            } else if (args[1] == "python") {
              language = "python3";
              index = "3";
            } else if (args[1] == "php") {
              language = "php";
              index = "3";
            }
            var fileName = message.attachments.array()[0];
            for (var i = 2; i < args.length; i++) input += args[i] + " ";

            request.get(fileName.url, (err, response, body) => {
              const runRequestBody = {
                script: body,
                language: language,
                stdin: input,
                versionIndex: index,
                clientId: process.env['CLIENT_ID'],
                clientSecret: process.env['CLIENT_SECRET'],
              };
              request
                .post({
                  url: "https://api.jdoodle.com/v1/execute",
                  json: runRequestBody,
                })
                .on("error", (error) => {
                  console.log("request.post error", error);
                  return;
                })
                .on("data", (data) => {

                  try {
                    const parsedData = JSON.parse(data.toString());
                    var output = "";
                    for (var i = 0; i < parsedData.output.length; i++) {
                      if (parsedData.output[i] == "\n") output += "\n";
                      else output += parsedData.output[i];

                      let outputOfProgram = new Discord.MessageEmbed()
                        .setAuthor(client.user.username)
                        .setDescription("Result!!!")
                        .setColor("33FFB3")
                        .setDescription(output);
                        return message.channel.send(outputOfProgram);
                    }
                    }catch (e) {
                      return;
                    }
  
            
                });
            });
            break;
        }
      } catch (Exception) {
        console.log(Exception);
        let Errorbotembed = new Discord.MessageEmbed()
          .setAuthor(client.user.username)
          .setDescription("Error!!!")
          .setColor("FFFFFF")
          .setDescription("Error Encountered\nFor Help use\nDM help");
          return message.channel.send(Errorbotembed);
      }
    });

  }
};