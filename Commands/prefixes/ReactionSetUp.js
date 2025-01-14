const { Message, MessageFlags } = require('discord.js');

module.exports = {
    name: 'set-up-reaction',
    description: 'Set your preferred emoji for reactions.',
    async execute(message, args) {
        if (!args.length) {
            return message.reply('Please provide an emoji to set up for reactions!');
        }

        const emoji = args[0];
        if (!emoji.match(/^<a?:\w+:\d+>|[^\x00-\x7F]+$/)) {
            return message.reply('Please provide a valid emoji!');
        }

        // Store emoji in a memory store (could be a database in the future)
        const userId = message.author.id;
        if (!message.client.reactions) {
            message.client.reactions = {}; // Initialize the reactions store if not done already
        }

        message.client.reactions[userId] = emoji;
        console.log(`Reactions store updated:`, message.client.reactions);

        return message.reply(`Your reaction emoji has been set to: ${emoji}`);
    },
};