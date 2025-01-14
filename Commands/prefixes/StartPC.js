const { Message } = require('discord.js');
const path = require('path');
const { exec } = require('child_process');

module.exports = {
    name: 'start-pc',
    description: 'starts pc',
    async execute(message, args) {
        // Get the absolute path to the Python file using __dirname
        const pythonFilePath = path.join(__dirname, '../../StartPc.py');

        // Run the Python file
        exec(`python "${pythonFilePath}"`, (err, stdout, stderr) => {
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

        return message.reply('PC started');
    },
};