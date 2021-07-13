const auth = require('./tokens.json')
const Discord = require('discord.js')

for (const token of auth.Tokens) {
    const client = new Discord.Client()
    client.on('ready', () => {
        console.log(`Logged in as: ${client.user.tag}
--------------------------------`)
    })
    
    client.login(token)
}
