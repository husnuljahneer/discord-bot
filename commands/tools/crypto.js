const { Client } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'crypto',
  aliases: [],
  category: 'tools',
  utilisation: '{prefix}crypto [crypto currency] [fiat currency]',
  description: "To get the price of a coin with respect to another coin or currency",
  execute: async (client, message, args) => {

    if (args.length !== 2) {
      return message.reply(
        'You must provide the crypto and the currency to compare with!'
      );
    } else {
      const [coin, vsCurrency] = args;
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${vsCurrency}`
        );
        if (!data[coin][vsCurrency]) throw Error();
        return message.reply(
          `The current price of 1 ${coin} = ${data[coin][vsCurrency]} ${vsCurrency}`
        );
      } catch (err) {
        return message.reply(
          'Please check your inputs. For example: $crypto bitcoin usd'
        );
      }
    }
  }
};