const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    //!report @user reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Couldn't find user.");
    if(!args[2]) return message.channel.send("You have to specify the reason for this report!.");
    let reason = args.join(" ").slice(22);
    let bicon = bot.user.displayAvatarURL;
    let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report")
        .setColor("#15f153")
        .addField("Reported user", `${rUser} With ID: ${rUser.id}`)
        .addField("Reported by", `${message.author} With ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField('Reason', reason)

    let reportsChannel = message.guild.channels.find(`name`, "reports");
    if (!reportsChannel) return message.channels.send("Couldn't find reports channel.");


    message.delete().catch(O_o => { });
    reportsChannel.send(reportEmbed);

      message.reply("**reported!**✅")



    report.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));



}

module.exports.help = {
    name: "report"
}
