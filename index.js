const Discord = require("discord.js");
const { readdirSync } = require("fs");
const client = new Discord.Client({
    intents: 32767,
});
const token = ""; // Token de tu bot.

client.on('ready', () => {
   console.log(`¡Estoy listo!`);
});

client.comandos = new Discord.Collection()
// Comandos
for (const subFolder of readdirSync(`${__dirname}/comandos/`)) {
    for (const fileName of readdirSync(`${__dirname}/comandos/${subFolder}/`)) {
        let file = require(`${__dirname}/comandos/${subFolder}/${fileName}`);
       client.comandos.set(file.name, file);
    }
}

// Eventos
for (const fileName of readdirSync(`${__dirname}/eventos/`)) {
    let file = require(`${__dirname}/eventos/${fileName}`);
    let eventEmiter = file.emiter;

    client[eventEmiter](file.name, file.run.bind(null, client));
}

client.login(token);
