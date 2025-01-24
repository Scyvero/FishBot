const {Events, PermissionsBitField, Message, MessageFlags} = require('discord.js')
const { execute } = require('./CountingMessageHandler')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return;
        
        switch (interaction.customId){

            //color options:

            case('color_option1'): 
                var member = interaction.member
                var role = '1331185638925664267' // blue
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role blue', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role blue', flags: MessageFlags.Ephemeral });
                    }
            break;


            case('color_option2'):
                var member = interaction.member
                var role = '1331192817552195625' // red
                if (member.roles.cache.has(role)) {
                    await member.roles.remove(role);
                    await interaction.reply({ content: 'removed role red' , flags: MessageFlags.Ephemeral });
                }
                if (!member.roles.cache.has(role)) {
                    await member.roles.add(role);
                    await interaction.reply({ content: 'added role red' + role.name, flags: MessageFlags.Ephemeral });
                }
            break;


            case('color_option3'):
                var member = interaction.member
                var role = '1331192949467385907' // orange
                if (member.roles.cache.has(role)) {
                    await member.roles.remove(role);
                    await interaction.reply({ content: 'removed role orange', flags: MessageFlags.Ephemeral });
                }
                if (!member.roles.cache.has(role)) {
                    await member.roles.add(role);
                    await interaction.reply({ content: 'added role orange', flags: MessageFlags.Ephemeral });
                }
            break;


            case('color_option4'):
                var member = interaction.member
                var role = '1331192864973262891' // green
                if (member.roles.cache.has(role)) {
                    await member.roles.remove(role);
                    await interaction.reply({ content: 'removed role green', flags: MessageFlags.Ephemeral });
                }
                if (!member.roles.cache.has(role)) {
                    await member.roles.add(role);
                    await interaction.reply({ content: 'added role green', flags: MessageFlags.Ephemeral });  
                }
            break;

            
        }
        switch (interaction.customId){

            //age options:
            
            case('age_option1'): 
                var member = interaction.member
                var role = '1331244518120620096' // 13
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role 13', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role 13', flags: MessageFlags.Ephemeral });
                    }
            break;
            case('age_option2'): 
                var member = interaction.member
                var role = '1331231745210843188' // 14
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role 14', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role 14', flags: MessageFlags.Ephemeral });
                    }
            break;
            case('age_option3'): 
                var member = interaction.member
                var role = '1331231719155826779' // 15
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role 15', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role 15', flags: MessageFlags.Ephemeral });
                    }
            break;


            case('age_option4'): 
                var member = interaction.member
                var role = '1331231664172695674' // 16
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role 16', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role 16', flags: MessageFlags.Ephemeral });
                    }
            break;


            case('age_option5'): 
                var member = interaction.member
                var role = '1331231609684230246' // 17
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role 17', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role 17', flags: MessageFlags.Ephemeral });
                    }
            break;


            case('age_option6'): 
                var member = interaction.member
                var role = '1331232704825655317' // 18
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role 18', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role 18', flags: MessageFlags.Ephemeral });
                    }
            break;
            case('age_option7'): 
                var member = interaction.member
                var role = '1331231799027699733' // 18
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role 19+', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role 19+', flags: MessageFlags.Ephemeral });
                    }
            break;
        }    
        if (interaction.customId === 'verification_option1'){
            var member = interaction.member
            var role = '1331246251332866109' // verified
            if (member.roles.cache.has(role)) {
                await interaction.reply({ content: 'already verifided', flags: MessageFlags.Ephemeral });
            }
            if (!member.roles.cache.has(role)) {
                await member.roles.add([
                    '1331246251332866109',
                    '1331232743962447873',
                    '1331232848115535872',
                    '1331253575384567899' ,
                    '1331253672625307782' 
                    ]);

                await interaction.reply({ content: 'you got verified!', flags: MessageFlags.Ephemeral });
            }
        }
        switch (interaction.customId){

            //continent options
            
            
            case('continent_option1'): 
                var member = interaction.member
                var role = '1331253755668332605' // EU
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role europe', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role europe', flags: MessageFlags.Ephemeral });
                    }
            break;
            case('continent_option2'): 
                var member = interaction.member
                var role = '1331253788392296568' // NA
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role north america', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role north america', flags: MessageFlags.Ephemeral });
                    }
            break;
            case('continent_option3'): 
                var member = interaction.member
                var role = '1331253837893472266' // AS
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role asia', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role asia', flags: MessageFlags.Ephemeral });
                    }
            break;


            case('continent_option4'): 
                var member = interaction.member
                var role = '1331254156702388305' // AUS
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role austaila', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role australia', flags: MessageFlags.Ephemeral });
                    }
            break;


            case('continent_option5'): 
                var member = interaction.member
                var role = '1331254401586696317' // Africa
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role africa', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role africa', flags: MessageFlags.Ephemeral });
                    }
            break;


            case('continent_option6'): 
                var member = interaction.member
                var role = '1331253876271218701' // south america
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role south america', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role south america', flags: MessageFlags.Ephemeral });
                    }
            break; //continent_option7 


            case('continent_option7'): 
                var member = interaction.member
                var role = '1331254301833564271' // antartica
                    if (member.roles.cache.has(role)) {
                        await member.roles.remove(role);
                        await interaction.reply({ content: 'removed role antartica', flags: MessageFlags.Ephemeral });
                    }
                    if (!member.roles.cache.has(role)) {
                        await member.roles.add(role);
                        await interaction.reply({ content: 'added role antartica', flags: MessageFlags.Ephemeral });
                    }
            break;
        }    
    }
}