const { EmbedBuilder, Colors } = require('discord.js');

module.exports = {
    name: 'fb-help',
    description: 'Provides help for commands or specific command details.',
    usage: '[command name]', // Optional argument
    prefix: '!',
    async execute(message, args) {
        const { commands } = message.client;

        // General help command
        if (!args.length) {
            const embed = new EmbedBuilder()
                .setTitle('Help: Command List')
                .setDescription('Here are all the available commands:')
                .setColor(Colors.Blue);

            // Add fields dynamically based on the number of commands
            commands.forEach((cmd) => {
                const prefix = cmd.prefix || '!';  // Default to '!' if prefix is not set

                embed.addFields({
                    name: `${prefix}${cmd.name}`,
                    value: cmd.description || 'No description provided.',
                });
            });

            embed.setFooter({ text: 'Use !help <command name> for detailed info on a specific command.' });

            return message.reply({ embeds: [embed] });
        }

        // Specific command help
        const commandName = args[0].toLowerCase();
        const command = commands.get(commandName);

        if (!command) {
            return message.reply(`The command \`${commandName}\` does not exist.`);
        }

        const embed = new EmbedBuilder()
            .setTitle(`Help: !${command.name}`)
            .setDescription(command.description || 'No description provided.')
            .setColor(Colors.Green);

        if (command.usage) {
            embed.addFields({
                name: 'Usage',
                value: `\`!${command.name} ${command.usage}\``,
            });
        }

        if (command.cooldown) {
            embed.addFields({
                name: 'Cooldown',
                value: `${command.cooldown} seconds`,
            });
        }

        return message.reply({ embeds: [embed] });
    },
};