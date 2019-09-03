const Discord = require("discord.js"); //gets the discord library
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You do not have permission");
    let wUser = message.mentions.members.first()
    if(!wUser) return message.reply("Counldn't find the member");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Cannot warn this member");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Please specify a reason for this warn!")

  message.channel.send(`<@${wUser.id}> has been warned for  \`${reason}\`.`)




  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#fc6400")
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(c => c.name === "incidents");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);


  if(warns[wUser.id].warns == 10){
    wUser.ban(reason)
    message.reply(`<@${wUser.id}> has been banned. Accumulated 10 warnings`)
  }

}

module.exports.help = {
  name: "warn"
}
