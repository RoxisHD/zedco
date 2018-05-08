const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("/");

bot.on("ready", function() {
    bot.user.setGame("Vous aidez");
    console.log("Le bot a bien été connecté");
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }

    if (message.content === "z!ping"){
        message.reply("Pong!");
        console.log("Ping Pong");
    }

bot.login("NDM5NzYxMTQ2MDk5MTM4NTYx.DdI9-A.ycYPxYGRvMnmuVETe7P3uVg47tU");
