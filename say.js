const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.find(r => r.name === "Straw") || message.member.roles.find(r => r.name ==="Owner")) return message.channel.send("You can not use this command!")


  let mChannel = message.mentions.channels.first()

  if(!mChannel) return message.reply('Please specify a channel');

  message.delete().catch();
  if (args.length < 1) return message.reply("What do you want me to say?").then(m => message.delete());

  mChannel.send(args.slice(2).join(" "));
}

module.exports.help = {
    name: "say"
}
