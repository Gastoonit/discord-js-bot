const { Events } = require('discord.js');
const config = require('../json/config.json');

module.exports = {
  name: Events.MessageCreate,
  emiter: "on",
  run: async (client, message) => {

  if (message.author.bot || message.channel.type === 'dm') return;

  if (!message.content.startsWith(config.DEFAULT_PREFIX)) return;

  const args = message.content.slice(config.DEFAULT_PREFIX.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase();
  let cmd = client.commands.get(command) || client.commands.find((c) => c.alias.includes(command));

  if (!cmd) return;

   cmd.run(client, message, args)

 }
};