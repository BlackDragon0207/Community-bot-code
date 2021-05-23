const Discord = require("discord.js")
const moment = require('moment')
moment.locale('ko-KR')

module.exports.run = async (bot, message, args) => {

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')}일 ${hrs.padStart(2, '0')}시간 ${min.padStart(2, '0')}분 ${sec.padStart(2, '0')}초 `
    }
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`[ BlackDragon Community Bot Uptime ]`)
    .addField("🕒 bot Uptime", `봇이 작동한 시간 : ${duration(bot.uptime)}`)
    message.channel.send(embed)
}

module.exports.config = {
    name: "uptime",
    description: "Displays the bots current uptime!",
    usage: "D_uptime",
    accessableby: "Members",
    aliases: ["ut"]
}