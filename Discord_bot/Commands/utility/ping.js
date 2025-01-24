const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    name: 'ping',
    description: 'replies with pong',
    prefix: '/',
    cooldown: 5,
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription("replies with pong!"),
    async execute(interaction) {
        await interaction.reply("pong!");
    },
}
