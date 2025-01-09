const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('node:fs');
const path = require('node:path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Reloads all commands.'),
    async execute(interaction) {
        const client = interaction.client;

        try {
            // Reload slash commands
            const slashCommandsPath = path.join(__dirname, '../utility');
            const slashCommandFiles = fs.readdirSync(slashCommandsPath).filter(file => file.endsWith('.js'));

            for (const file of slashCommandFiles) {
                const filePath = path.join(slashCommandsPath, file);
                delete require.cache[require.resolve(filePath)];
                const command = require(filePath);
                client.commands.set(command.data.name, command);
            }

            // Reload prefix commands
            const prefixCommandsPath = path.join(__dirname, '../prefixes');
            const prefixCommandFiles = fs.readdirSync(prefixCommandsPath).filter(file => file.endsWith('.js'));

            for (const file of prefixCommandFiles) {
                const filePath = path.join(prefixCommandsPath, file);
                delete require.cache[require.resolve(filePath)];
                const command = require(filePath);
                client.commands.set(command.name, command);
            }

            await interaction.reply('All commands have been successfully reloaded!');
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while reloading the commands.');
        }
    },
};