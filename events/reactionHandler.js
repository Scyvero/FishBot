const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Ignore messages from bots
        if (message.author.bot) return;

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
    }
}