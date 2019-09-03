const Discord = require('discord.js');
let config = require('../botconfig.json');
let red = config.red;



module.exports.run = async (bot, message, args) => {
  let replies = [
      "You got ran over by a car.",
      "You got stabbed.",
      "You got shot.",
      "Your Grandma killed you.",
      "You stroked to death.",
      "You burned to death.",
      "YOu got freezed die.",
      "Your mom killed you because you got suspended from school."
    ];
  let result = Math.floor((Math.random() * replies.length));
  let bicon = bot.user.displayAvatarURL;
  let deathEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor(red)
  .setDescription(replies[result]);

  message.channel.send(deathEmbed);

};


module.exports.help = {
  name: 'death'
}
