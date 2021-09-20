const { Client, Intents, Interaction, CommandInteractionOptionResolver } = require('discord.js');
const { intersection } = require('lodash');
const { userInfo } = require('os');
const { token } = require('./config.json');

const client = new Client ({ intents: [Intents.FLAGS.GUILDS]});


client.once('ready' , () => {
    console.log('Ready!'); 
}); 

client.on('interactionCreate', async Interaction => {
    if (!Interaction.isCommand()) return;

    const {commandName} =Interaction;

    if (commandName === 'ping') {
        await Interaction.reply('dont wake me up!');
    } else if (commandName === 'server') {
        await Interaction.reply('End my suffering.');
    }else if (commandName === 'user'){
        await Interaction.reply('Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}'); 
    }
});

client.login(token);

//code to start bot: node index.js

// Issue is module directory is wrong Json file needs to be located  Module_not_found