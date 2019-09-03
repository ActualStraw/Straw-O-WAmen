const discord  = require('discord.js');
const config = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    message.reply('pong!');
}

module.exports.help = {
name:'ping'
}
