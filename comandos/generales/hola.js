const Discord = require('discord.js');

module.exports = {
    name: "hola", //Aquí el nombre ej: name: "nombre",
    alias: ["h"], //Aquí el alias ej: alias: ["nombre2"],
    run: (client, message, args) => {

 //Aquí escribe tu comando. Pd: Que tu comando no valla a sobrepasar los "}".
 
 message.reply("¡Hola!")

 }
 
};