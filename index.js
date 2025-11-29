const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// 🔑 Get token from Railway Variables
const TOKEN = process.env.TOKEN;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;

    // Example: @user a
    if (msg.mentions.users.size > 0 && msg.content.endsWith(" a") || msg.mentions.users.size > 0 && msg.content.endsWith(" A")) {
        const mentionedUser = msg.mentions.users.first();
        if (!mentionedUser) return;

        msg.reply(mentionedUser.displayAvatarURL({ extension: "png", size: 1024 }));
    }
});

client.login(TOKEN);
