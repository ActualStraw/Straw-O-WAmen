const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to preform this command!")
    if(!message.guild.me.hasPermission("MANAGE_ROLES", "ADMINISTRATOR", "MANAGE_MESSAGES")) return message.reply("Sorry i don't have the permissions to do that");
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    try {
         await kUser.send(`You have been Banned from ${message.guild.name} Reason: ${kreason}`)
    } catch (e) {
        message.channel.send(`${kUser} just got Banned!!  `)
    }
    let bicon = bot.user.displayAvatarURL;
    let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Banned User", `${kUser} with ID ${kUser.id}`)
      .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Banned In", message.channel)
      .addField("Tiime", message.createdAt)
      .addField("Reason", kReason)

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if (!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).ban(kReason);
    kickChannel.send(kickEmbed);


}

module.exports.help = {
    name: "ban"
}
