const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("z!");

bot.on("ready", function() {
    bot.user.setGame("z!help");
    console.log("Le bot a bien été connecté");
});

bot.login("NDM5NzYxMTQ2MDk5MTM4NTYx.DdI9-A.ycYPxYGRvMnmuVETe7P3uVg47tU");

bot.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }

    if (msg.content === 'z!help') {
        msg.reply('Commande du bot : z!help')
    }
    
});
