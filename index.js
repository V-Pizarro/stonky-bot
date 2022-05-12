const Discord = require("discord.js");
require("dotenv").config();


// const TOKEN = "OTczNjM1Njg3ODM0MzQ1NTYz.GKe7L8.oMkiTPXTiq4bHN0bkb_mAPkDNZP9b6R0aSMwUk";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
    if (msg.content == "hi") {
        msg.reply("Hello hi");
    }
})

client.login(process.env.TOKEN);