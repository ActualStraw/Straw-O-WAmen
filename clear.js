const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("You are not allowed ot use this command!")
  if(!args[0]) return message.channel.send("You have to specify a number of messages to delete.");
  message.channel.bulkDelete(args[1]).then(() => {
    message.channel.send(`Deleted ${args[1]} messages.`).then(msg => msg.delete(2000));
  });
}

module.exports.help = {
  name: "clear",
  description: "Bulkdelete a specified amount of messages."
}
