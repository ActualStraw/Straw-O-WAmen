const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('NjE2NDI5Mzc4NDc3NDkwMTc2.XWdROg.wa1jW_ngv3qrX74tCpmamnhbJys');

client.on('message', message => {
	if (message.content === 'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
});

client.on('message', message => {
	if (message.content === 'who are you?') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('I am Straw girl version :wink:');
    }
});