const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription("replies with pogn"),
    async execute(interaction) {
        await interaction.reply("pong!");
    },
}
