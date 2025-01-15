const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Ignore messages from bots
        if (message.author.bot) return;

        const prefix = '!';

        // Handle commands
        if (message.content.startsWith(prefix)) {
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();

            const command = message.client.commands.get(commandName);

            if (!command) return;

            try {
                await command.execute(message, args);
            } catch (error) {
                console.error(error);
                await message.reply('There was an error executing that command.');
            }
            return;
        }
    }
}