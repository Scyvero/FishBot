const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Ignore messages from bots
        if (message.author.bot) return;

        const prefix = '!';

        // If the message starts with the prefix, handle the command
        if (message.content.startsWith(prefix)) {
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();

            const command = message.client.commands.get(commandName);

            if (!command) return; // If the command doesn't exist, exit

            try {
                await command.execute(message, args);
            } catch (error) {
                console.error(error);
                await message.reply('There was an error executing that command.');
            }
        }

        // Get the user's preferred reaction emoji (if set)
        const userId = message.author.id;
        const reactionEmoji = message.client.reactions?.[userId];

        // If the user has set a reaction emoji, react to the message
        if (reactionEmoji) {
            try {
                await message.react(reactionEmoji);
            } catch (error) {
                console.error('Error reacting to message:', error);
            }
        }
    },
};