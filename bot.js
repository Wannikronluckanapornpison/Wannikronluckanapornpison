const Discord = require("discord.js");
const client = new Discord.Client();
const auth =  require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'hey'); {
        msg.reply('hey!');
    }
    if (msg.content === 'สวัสดี'); {
        msg.reply('สวัสดีค่ะ');
    }
    if (msg.content === 'Sammy'); {
        msg.reply('ว่าใงค่ะ?');
    }
    if (msg.content === 'help'); {
        msg.reply('help.js')
    }
    if (msg.content === 'Love You'); {
        msg.reply('i love you too');
    }
    if (msg.content === 'Fuck me'); {
        msg.reply('I am ready');
    }
   if (msg.content === 'Joine call me'); {
       msg.reply('Do not Join Call me ');
    } 
   if (msg.content === 'Sexy Girl'); {
       msg.reply('Thank You');
   }
});

client.login(auth.token);