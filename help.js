const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setTitle("Staff Only Commands")
         .setThumbnail(bot.user.displayAvatarURL)
         .setColor("RANDOM")
.addField('ban @user',  'ban a user')
.addField('kick @user',  'Kick a user')
.addField('warn @user {reason}', 'warns a member (10 warns = auto ban)')
.addField('clear {amount}', 'clears messages (any amount you want.)')
.addField('send @user', 'Dms the mentioned user.')
.addField('warnlevel @user', 'check the amount of warnings of the mentioned user')

const botembed2 = new Discord.RichEmbed()
.setTitle("Normal Commands")
.setThumbnail(bot.user.displayAvatarURL)
.setColor("RANDOM")
.addField('report @user {reason}', 'reports a user (abusing this command can mean a ban)')
.addField('Ping', 'Pong')
.addField('meme', 'generates a random meme.')
.addField('flip', 'Flips a coin.')
.addField('8ball', 'idk wat its description should be.')













message.channel.send(botembed);
message.channel.send(botembed2);

}

module.exports.help = {
    name: "help"
}
