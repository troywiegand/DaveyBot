const Discord= require('discord.js')
const client = new Discord.Client()
const settings=  require('./settings.json')

client.on('ready', ()=>{
    console.log('ONLINE')
})

food = (message) =>{
    const random=Math.floor(Math.random() * 6)
    if(random===0||random===1)
    message.channel.send('TWAMWICHES!!')
    if(random===2)
    message.channel.send('pancakes')
    if(random===3)
    message.channel.send('protein cookie')
    if(random===4)
    message.channel.send('pastaaaa')
    if(random===5)
    message.channel.send('chicken and rice')
}

help = (message) =>{
    message.channel.send('Hello, I\'m DaveyBot. \n Here\'s a list of my commands: \n \n d!food ------ recieve a message of one of DaveyBot\'s fave foods')
}

let prefix = 'd!'
client.on('message', message=>{
    if(message.author===client.user) return
    if(message.content.startsWith(prefix + "food")){
        food(message)
    }
    if(message.content.startsWith(prefix + "help")){
        help(message)
    }
    if(message.content.includes('fuck') ||message.content.includes('Fuck')){
        message.channel.send('Don\'t you cuss at me!')   
    }

    if(message.content.includes('jesus') || message.content.includes('Jesus')){
        message.channel.send('You can just call me DaveyBot')   
    }

    if(message.content.includes('React')){
        message.channel.send('npm install react')   
    }

    if(message.content.includes('anime')){
        message.channel.send('I hear you kids like the anime')   
    }

    if(message.content.includes(prefix+'shrimp')){
        message.channel.send('SLAM THAT SHRIMP BUTTON KIDS!!')   
    }

    if(message.content.includes(prefix+'sing')){
        message.channel.send('HAAAPPPPPYYY BIRTHDAY TO YOOOOUUUU!!!!')   
    }

})




client.login(settings.token)