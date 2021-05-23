const Discord = require("discord.js")
const COR = "#a6ffed"
const dotenv = require("dotenv")
const db = require("mongoose").connection
const fs = require("fs")
const moment = require("moment-timezone")
const mongoose = require("mongoose")
const os = require("os")
const util = require("util")
const dbcm = require("dbcm")
const utils = new dbcm.Utils({ lang: "ko-KR" })
const config = require("../config.js")
const child = require("child_process")
const devs = [
    "435800525389430804", "690504046905393182"
]

exports.run = async (client, message, args) => {
    if(message.content.includes("token")) return message.channel.send("token 관련 명령어는 사용이 불가합니다.")
    if (!devs.includes(message.author.id)) return message.channel.send(`${message.author} 님, 이 명령어는 개발자 전용입니다.`)

    let loading = await message.channel.send(`${client.emojis.get('715047358873731122')} Please Wait..`)

    let msg = message
    let cmd = args.join(" ")
    let type

    new Promise(resolve => resolve(eval(cmd)))
        .then(async res => {
            let code = type = res

            if (typeof code !== "string") code = util.inspect(code, { depth: 0 })
            if(typeof type === "function") code = type.toString()

            let evalEmbed = new Discord.RichEmbed()
                .setAuthor("Eval", message.author.avatarURL)
                .setColor(`#FFFFFF`)
                .addField("⌨Input:", `\`\`\`js\n${String(cmd).length > 1024 ? (String(cmd).substring(0, 983) + "\n//And much more...") : (cmd)}\n\`\`\``)
                .addField("💻Output:", `\`\`\`js\n${String(code).length > 1024 ? (String(code).substring(0, 983) + "\n//And much more...") : (code)}\n\`\`\``)
            loading.edit(evalEmbed)
        }).catch(Ecmd => {
            let Eembed = new Discord.RichEmbed()
                .setTitle("Eval Error:")
                .setColor(`PURPLE`)
                .setDescription(`\`\`\`${Ecmd}\`\`\``)
                loading.edit(Eembed)
        })
}
exports.config = {
    name: "cmd",
    aliases: ["eval", "script", "js"]
}