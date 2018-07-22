const Discord= require('discord.js')
const Music= require('discord.js-musicbot-addon');
const client = new Discord.Client()
const token=  require('./settings.json').token
const ytAPIKey= require('./settings.json').ytAPIKey

const daveymad = '<:daveymad:469936457705062412>'
const daveysmile= '<:daveysmile:469932321387053077>'

let prefix = 'd!'
let pokemonBool=false
let animeBool=true
let cussBool=false
let jesusBool=true
let reactBool=true

client.on('ready', ()=>{
    console.log('ONLINE')
    client.user.setActivity('CHRI$ MOVIE$',{url:"http://bootcamp18s3.fretless.com/chrismess/", type: "WATCHING"})
})

Music.start(client, {
    youtubeKey: ytAPIKey,
    prefix: prefix,
    helpCmd: "musichelp",
    enableQueueStat: true,
    anyoneCanSkip: true,
    anyoneCanPause: true,
    anyoneCanLeave:true,
    requesterName: true,
    embedColor: 'DARK_RED',
  });

food = (message) =>{
    const random=Math.floor(Math.random() * 6)
    if(random===0||random===1){
    message.channel.send('TWAMWICHES!!')

      
}
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
    message.channel.send(`Hello, I\'m Davey Bot. ${daveysmile} \n Here\'s a list of my commands: \n \n `+
    'd!food      ------ Davey Bot will tell one of his fave foods. \n '+
    'd!shrimp    ------ Davey Bot will inform on how to deal with the Shrimp Button. \n '+
    'd!sing      ------ Davey Bot will sing Happy Birthday to you. \n '+
    'd!fortnite  ------ Davey Bot will complain about kids and fortnite. \n '+
    'd!fretless  ------ Davey Bot will tell the tale of starting Fretless. \n '+
    'd!pokemon   ------ Davey Bot will turn off/on his comment about Pokemon. \n '+
    'd!anime     ------ Davey Bot will turn off/on his comment about anime. \n '+
    'd!cuss      ------ Davey Bot will turn off/on his comment about curse words.\n '+
    'd!jesus     ------ Davey Bot will turn off/on reminding you to just call him Davey Bot. \n '+
    'd!react     ------ Davey Bot will turn off/on trying to get you to install React.\n '+
    'd!join      ------ Davey Bot will join your VC and yell his iconic "TWAMMICHES".\n '+
    'd!musichelp ------ Davey Bot will help you work the Music Bot library.\n '
)
}


client.on('message', message=>{

    //FAILSAFE TO STOP DAVEY BOT TO GO INFINITE OFF OF ITSELF OR OTHER BOTS
    if(message.author.bot) return


    //AUTOMATIC REPLIES
    
    if(cussBool && (message.content.includes('fuck') ||message.content.includes('Fuck') ||message.content.includes('shit') )){
        message.channel.send(`Don't you cuss at me! ${daveymad}`)   
    }

    if(jesusBool&&(message.content.includes('jesus') || message.content.includes('Jesus'))){
        message.channel.send('You can just call me Davey Bot')   
    }

    if(reactBool && (message.content.includes('React')||message.content.includes('react'))){
        message.channel.send('npm install react')   
    }

    if(message.content.includes('pokemon') && pokemonBool){
        message.channel.send('idk if I could catch them all')   
    }

    if(message.content.includes('anime') && animeBool){
        message.channel.send('I hear you kids like the anime')   
    }

    //COMMANDS THAT WHEN USED JUST GIVE A MESSAGE BACK

    if(message.content.startsWith(prefix + "food")){
        food(message)
    }
    
    if(message.content.startsWith(prefix + "help")){
        help(message)
    }

    if(message.content.includes(prefix+'shrimp')){
        message.channel.send('SLAM THAT SHRIMP BUTTON KIDS!!')   
    }

    if(message.content.includes(prefix+'fretless')){
        message.channel.send('My friend texted me asking me if I wanted to start a company, I was like *I dont even care if you\'re selling drugs to school children at this point, Im in*')   
    }

    if(message.content.includes(prefix+'fortnite')){
        message.channel.send('kids nowadays are all about fornite, pew pew, p0wning n00bs')   
    }

    if(message.content.includes(prefix+'sing')){
        message.channel.send('HAAAPPPPPYYY BIRTHDAY TO YOOOOUUUU!!!!')   
    }

    if(message.content.includes(prefix+'robotrock')){
        message.channel.send('d!play robot rock')   
    }

    //COMMANDS THAT TURN ON/OFF AUTOMATIC REPONSES

    if(message.content.includes(prefix+'cuss')){
       cussBool=!cussBool
       if(cussBool)
         message.channel.send('You better not cuss at me')
       else
         message.channel.send('I don\'t care what you say')
    }

    if(message.content.includes(prefix+'anime')){
        animeBool=!animeBool
        if(animeBool)
         message.channel.send('Totoro i guess...')
        else
         message.channel.send('I guess you don\'t like anime')
     }

     if(message.content.includes(prefix+'pokemon')){
        pokemonBool=!pokemonBool
        if(pokemonBool)
         message.channel.send('I am about to start over from scratch.')
        else
         message.channel.send('I have caught them all.')
     }

     if(message.content.includes(prefix+'jesus')){
        jesusBool=!jesusBool
        if(jesusBool)
         message.channel.send('My full name is Davey Bot Jesus Christ Strus')
        else
         message.channel.send('That joke is getting old.')
     }

     if(message.content.includes(prefix+'react')){
        reactBool=!reactBool
        if(reactBool)
         message.channel.send('Open your terminals ')
        else
         message.channel.send('You better have it installed by now.')
     }

})

//Seperate message listener for voice shenanigans
client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it.
    if (!message.guild) return;
  
    if (message.content === 'd!join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const dispatcher = connection.playStream('./twammiches1.wav');
      } else {
        message.reply('You need to join a voice channel first!');
      }  

    }

    if(message.content.startsWith(prefix+'play')){
        let rest = message.content.split(' ')
        rest.splice(0,1)
        rest = rest.join(" ")

        if(client.internal.voiceConnection){
            var connection = client.internal.voiceConnection;
            var request = require("request");
            connection.playRawStream(request(rest)).then(intent => {
				client.reply(message, "playing!").then((msg) => {
					
					intent.on("end", () => {
						client.updateMessage(msg, "that song has finished now.");
					});
					
				});
				
			});
        }
    }




  });


client.login(token)