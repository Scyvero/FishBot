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

        // Ensure `reactions` is initialized
        if (!message.client.reactions) {
            message.client.reactions = {};
        }

        // Check if the message replies to or mentions a user with a set reaction
        let targetUserId = null;

        // If the message is a reply, fetch the referenced message
        if (message.reference) {
            try {
                const referencedMessage = await message.channel.messages.fetch(message.reference.messageId);
                targetUserId = referencedMessage.author.id;
            } catch (error) {
                console.error('Error fetching referenced message:', error);
            }
        }

        // If the message mentions a user, set targetUserId to the mentioned user's ID
        if (message.mentions.users.size > 0) {
            const mentionedUser = message.mentions.users.first();
            targetUserId = mentionedUser.id;
        }

        // If we have a target user, check if they have a reaction emoji set
        if (targetUserId) {
            const reactionEmoji = message.client.reactions[targetUserId];

            if (reactionEmoji) {
                try {
                    await message.react(reactionEmoji);
                } catch (error) {
                    console.error('Error reacting to message:', error);
                }
            }
        }
    },
};