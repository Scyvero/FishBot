const { Message } = require('discord.js');
const path = require('path');
const { exec } = require('child_process');

module.exports = {
    name: 'start-pc',
    description: 'Starts PC',
    async execute(message, args) {
        try {
            // Log that the command was triggered
            console.log(`Received 'start-pc' command from ${message.author.tag}`);

            // Get the absolute path to the Python file using __dirname
            const pythonFilePath = path.join(__dirname, '../../StartPc.py');
            console.log(`Python file path: ${pythonFilePath}`);

            // Ensure Python is correctly referenced (full path or 'python3' for systems with both versions installed)
            const pythonExecutable = 'python'; // You might need to change this to 'python3' or the full path, depending on your system

            // Run the Python file
            exec(`"${pythonExecutable}" "${pythonFilePath}"`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Error executing Python script: ${err.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`Python script stderr: ${stderr}`);
                    return;
                }
                // Log the stdout from the Python script
                console.log(`Python script stdout: ${stdout}`);
            });

            // Log that the command was successfully triggered
            console.log("PC start process initiated.");
            return message.reply('PC start process initiated');
        } catch (error) {
            // Log any unexpected errors
            console.error(`Error in start-pc command: ${error.message}`);
            return message.reply('There was an error trying to start the PC.');
        }
    },
};