deploy-commands.toJSON 
const {SlashCommandBuilder } = require('@discordjs/builders');
const {REST} = require('discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const {clientId, guildId, token } = require('./config.json');
const { rest } = require('lodash');

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with dont wake me up!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with End my suffering.'),
]
.map(command => command.toJSON());

const rest = new REST({ version: '9'}).setToken(token);


(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );
        console.log('Successfully registered application commands.');
    } catch (error){
        console.error(error);
    }
})(); 
// code to start command: node deploy-commands.js
// yarn : start yarn process 
