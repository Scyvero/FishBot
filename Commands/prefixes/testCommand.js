module.exports = {
    name: 'test', // Command name
    description: 'test command',
    prefix: '!',
    async execute(message, args) {
        // Join the remaining arguments back into a string
        const textContent = args.join(' ');
        await message.reply(`You said: "${textContent}"`);
    },
};
