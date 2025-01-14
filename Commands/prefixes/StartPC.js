const { Message } = require('discord.js');

module.exports = {
    name: 'start-pc',
    description: 'starts pc',
    async execute(message, args) {
    
        const { exec } = require('child_process');

// Path to the Python file
const pythonFilePath = './path/to/your/pythonFile.py';

// Run the Python file
exec(`python ${pythonFilePath}`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

        return message.reply(`pc started`);
    },
};