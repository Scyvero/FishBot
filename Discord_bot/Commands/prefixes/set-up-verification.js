const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Colors, message } = require('discord.js');

module.exports = {
    name: 'set-up-verification',
    description: 'sets up verification in current channel',
    prefix: '!',
    async execute(message, args) {
        try {
            const embed = new EmbedBuilder()
            .setDescription('press here to get verified:')
            .setColor(0x808080);

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('verification_option1')
                    .setLabel('VERIFY')
                    .setStyle(ButtonStyle.Secondary)
            );
            await message.channel.send({
                embeds:[ embed],
                components: [row],
            });


        }
        catch(error) {
                console.error('error sendign embed:', error);
                return message.reply('there was an error sending the embed')
        }
    }
}