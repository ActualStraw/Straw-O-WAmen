const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  function doRandHT() {
  var rand = ['HEADS!','TAILS!'];

  return rand[Math.floor(Math.random()*rand.length)];
  }

   const embed = {
  "title": 'Here is the winner!',
  "description": doRandHT(),
  "color": 7584788,
  };
  message.channel.send({ embed });


  };






module.exports.help = {
    name: "flip"

}
