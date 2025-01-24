const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Colors, message } = require('discord.js');

module.exports = {
    name: 'set-up-self-role',
    description: 'sets up self roles in current channel',
    prefix: '!',
    async execute(message, args) {
        try {
            const embed = new EmbedBuilder()
            .setDescription('Please select one of the colors you want from the options below:')
            .setColor(0x808080);

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('color_option1')
                    .setLabel('blue')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('color_option2')
                    .setLabel('red') // Gray button
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('color_option3')
                    .setLabel('orange') // Gray button
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('color_option4')
                    .setLabel('green') // Gray button
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
        try {
            const embed = new EmbedBuilder()
            .setDescription('Please select your age from the options below:')
            .setColor(0x808080);

            const row1 = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('age_option1')
                    .setLabel('13')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('age_option2')
                    .setLabel('14')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('age_option3')
                    .setLabel('15')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('age_option4')
                    .setLabel('16')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('age_option5')
                    .setLabel('17')
                    .setStyle(ButtonStyle.Secondary)
            );

            const row2 = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('age_option6')
                    .setLabel('18')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('age_option7')
                    .setLabel('19+')
                    .setStyle(ButtonStyle.Secondary)
            );
            
            

            await message.channel.send({
                embeds:[ embed],
                components: [row1, row2],
            });

            }
            catch(error) {
                console.error('error sendign embed:', error);
                return message.reply('there was an error sending the embed')
            }

            try {
                const embed = new EmbedBuilder()
                .setDescription('please select your continent:')
                .setColor(0x808080);
    
                const row1 = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId('continent_option1')
                        .setLabel('Europe')
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('continent_option2')
                        .setLabel('North america')
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('continent_option3')
                        .setLabel('Asia')
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('continent_option4')
                        .setLabel('Australia/oceania')
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('continent_option5')
                        .setLabel('africa')
                        .setStyle(ButtonStyle.Secondary)
                );
    
                const row2 = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId('continent_option6')
                        .setLabel('south America')
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId('continent_option7')
                        .setLabel('antartica')
                        .setStyle(ButtonStyle.Secondary)
                );
                
                
    
                await message.channel.send({
                    embeds:[ embed],
                    components: [row1, row2],
                });
    
                }
                catch(error) {
                    console.error('error sendign embed:', error);
                    return message.reply('there was an error sending the embed')
                }
    }
    
}