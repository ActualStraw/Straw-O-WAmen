const Discord = require("discord.js");
const fs = require("file-system");
const bot = new Discord.Client({ disableEveryone: true });
const { prefix, token } = require('./botconfig.json')
const moment = require ("moment");

const Keyv = require("keyv");
const rateLim = new Keyv();
const cleverbot = require('cleverbot.io');
let abot = new cleverbot('MKv74pctN5ID1np3', 'LM8QeYoUMBlNL5NL47jXREJNKd9cCOxO');
abot.setNick('Straw\'o WAmen');
abot.create(function (err, session) {
if (err) throw new Error(err);
})






bot.commands = new Discord.Collection()

require("moment-duration-format");

bot.on('message', async message => {
  if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
    if (message.content.startsWith(`<@${bot.user.id}>`)) {
      let rateLimit = await rateLim.get('ratelimit')
   if(rateLimit) return message.reply(`A little too quick there!`)

   await rateLim.set(`ratelimit`, `true`, 4000)

   let query = message.content.replace(`<@${bot.user.id}>`, "")

   message.reply("⏳ loading...").then(msg => {
     abot.ask(query, function (err, response) {
     //if (err) return msg.edit(`${message.author}, Error: \`${err}\``)
     msg.edit(`${message.author}, ${response}`)
   });

})

  }


});





const PREFIX = ';';

fs.readdir("./commands/", (err, files) => {

    if (err) console.error(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn\'t find command");
        return;

    }
    //// TODO: finding the commands folder
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});



bot.once('ready', () => {
    console.log('Ready!')


    bot.user.setActivity("Straw", { type: "WATCHING" })

    bot.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })

    })

});




bot.login(token);
