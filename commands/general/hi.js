const { EmbedBuilder, Colors } = require('discord.js');

module.exports = {
    name: "hi",
    alias: ["hello"],
    run: (client, message, args) => {

    const Embed = new EmbedBuilder()
	.setDescription('¡Testing Embed!')
	.setColor(Colors.Green)
    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true }) })

    message.reply({
		content: 'Hi, I\'m a happy bot. 🥳',
		embeds: [Embed]
	})
		
 }
};