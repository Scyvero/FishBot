//handles all events for sent messages, used for multiple things

/*
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

        // Handle replies and mentions
        try {
            // Check if the message is a reply
            if (message.reference) {
                // Fetch the message being replied to
                const repliedTo = await message.channel.messages.fetch(message.reference.messageId);
                const repliedToUser = repliedTo.author;
                
                // Get the reaction emoji for the user being replied to
                const reactionEmoji = message.client.reactions?.[repliedToUser.id];
                
                if (reactionEmoji) {
                    await message.react(reactionEmoji);
                }
            }

            

            // Check for mentions (excluding the bot itself)
            const mentions = message.mentions.users;
            for (const [userId, user] of mentions) {
                // Skip if it's the bot being mentioned
                if (user.id === message.client.user.id) continue;
                
                // Get the reaction emoji for the mentioned user
                const reactionEmoji = message.client.reactions?.[userId];
                
                if (reactionEmoji) {
                    await message.react(reactionEmoji);
                }
            }
        } catch (error) {
            console.error('Error handling reaction:', error);
        }
    },
};
*/
