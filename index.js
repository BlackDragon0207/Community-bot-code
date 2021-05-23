//require("dotenv").config()
//투명: [ ]
const os = require('os')
const Discord = require("discord.js")
const { Client, MessageAttachment } = require('discord.js');
const dbcm = require("dbcm")
const config = require("./config")
const fs = require('fs')
const chalk = require("chalk").default
const moment = require("moment")
const dbConnect = require('mongoose').connect
const db = require('mongoose').connection
moment.locale('ko-KR')
const client = new dbcm.Client({
    dev: ["435800525389430804"],
    autoReconnect: true,
    locale: "ko-KR"
})
client.registerCommands(__dirname + "/commands")
// client.database.registerModels()

client.on("debug", info => {
    if (!info.startsWith("[ws]")) return

    let text = info

    console.log(text)
})

dbConnect(config.MONGO_ACCESS, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }).then((err) => {
    if(!err){ console.log(`[MongoDB] Error! ${err}`) }
    if(err){ console.log(`[MongoDB] Connected`) }
}
)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  

client.on("ready", () => {
    console.log(`───────────────────── [ BlackDragon Bot ] ─────────────────────\nClient_Name: ${client.user.username}\nClient_ID: ${client.user.id}\nClient_CreatedAt: ${client.user.createdAt}\nHOST_OS: ${os.platform}\nHOST_HOSTNAME: ${os.hostname}\n───────────────────── [ BlackDragon Bot ] ─────────────────────`)

    if(os.platform === 'win32') return

    function setStatus() {
        let s = [
          {
            name: `BlackDragon Community`,
            type: "WATCHING"
        }
        ]

        let rs = s[Math.floor(Math.random() * s.length)];
        client.user.setPresence({ game: rs , status: 'offline' });

    }



    setStatus()
    setInterval(() => setStatus(), 10000)

    
})


let prefix = config.HOSTPREFIX

client.on('ready', () => {
  console.log('I am ready!');
});

  
client.on("message", async message => {
    if(message.system || message.author.bot || !message.content.startsWith(prefix)) return
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    client.runCommand(command, message, args)
})


client.on('ready', () => {
  // 봇을 작동할 시 cmd에 연결된 서버 목록을 가져온다
  console.log("Servers list")
  client.guilds.forEach((guild) => {
      console.log(" - " + guild.name)
  })
})



  

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login(config.HOSTTOKEN)