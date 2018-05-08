const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Vous aidez");
    console.log("Le bot a bien été connecté");
});

bot.login("NDM5NzYxMTQ2MDk5MTM4NTYx.DdI9-A.ycYPxYGRvMnmuVETe7P3uVg47tU");
