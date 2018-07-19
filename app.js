const Discord= require('discord.js')
const client = new Discord.Client()
const settings=  require('./settings.json')

client.on('ready', ()=>{
    console.log('ONLINE')
})

let prefix = 'd!'
client.on('message', message=>{
    if(message.author===client.user) return
    if(message.content.startsWith(prefix + "food")){
        message.channel.sendMessage('TWAMWICHES!!')
    }
})

client.login(settings.token)