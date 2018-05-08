const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("/");

bot.on("ready", function() {
    bot.user.setGame("Vous aidez");
    console.log("Le bot a bien été connecté");
});

bot.login("NDM5NzYxMTQ2MDk5MTM4NTYx.DdI9-A.ycYPxYGRvMnmuVETe7P3uVg47tU");

bot.on("message", message => {
    if (message.content === "Ping"){
        message.reply("Pong!");
        console.log(" Ping Pong");
    }

    if (message.content === prefix + "z!help"){
        message.channel.sendMessage("Voici les commandes du bot : z!ping");
        console.log("Commande Help demandée !");
    }
});
