const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { readdirSync } = require("node:fs");
const client = new Client({
    intents: [
		GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
	],
});
const config = require('./json/config.json');

client.commands = new Collection()
// Commands Message
for (const subFolder of readdirSync(`${__dirname}/commands/`)) {
    for (const fileName of readdirSync(`${__dirname}/commands/${subFolder}/`)) {
        let file = require(`${__dirname}/commands/${subFolder}/${fileName}`);
       client.commands.set(file.name, file);
    }
};

// Events
for (const subFolder of readdirSync(`${__dirname}/commands/`)) {
    for (const fileName of readdirSync(`${__dirname}/events/${subFolder}/`)) {
        let file = require(`${__dirname}/events/${subFolder}/${fileName}`);
        let eventEmiter = file.emiter;
       client[eventEmiter](file.name, file.run.bind(null, client));
	}
};

client.login(config.BOT_TOKEN);
