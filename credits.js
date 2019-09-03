const Discord = require('discord.js');
let config = require('../botconfig.json');
let cyan = config.cyan;



module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let cEmbed = new Discord.RichEmbed()
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .setTitle("Credits:")
  .addField("Creator:"," Straw#6666")
  .addField("Helpers:", "cf#1530, Speedy#9365");


  message.channel.send(cEmbed);
}



module.exports.help = {
  name: 'credits'
}
