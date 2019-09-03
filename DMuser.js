const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let dmuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!dmuser) return message.channel.send("couldn't find user")
  if(!args[2]) return message.channel.send("Please specify the message I should Dm!")

  message.delete();
  dmuser.send(args.slice(2).join(" "));


}


module.exports.help = {
    name: "send"
}
