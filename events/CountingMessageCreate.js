const { Events } = require('discord.js');
var Counting_num = 0

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Ignore messages from bots
        if (message.author.bot) return;

        if (message.channel.id === '1329194635779772509' && !message.content.startsWith('!')){
            
            if (/^\d+$/.test(message.content)) {
                var msg = message.content;
                if (msg == Counting_num + 1){
                    Counting_num++
                    message.react ("✅")
                }
                else{
                    message.reply ('<@' +message.author + ">" + " ruined it! start at 1");
                    Counting_num = 0
                    message.react ("❌");
                }
            }
        }
    }
}