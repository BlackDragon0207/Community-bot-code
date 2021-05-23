const Discord = require("discord.js")
const { version } = require('discord.js')
const mongover = require("mongoose").version
const dbcmversion = require("dbcm").version
const cpu = require("cpu-stat")
const address = require("address")
const os = require("os")
const moment = require("moment")
moment.locale('ko-KR')

exports.run = (client, message, args) => {
    let owner = client.emojis.get('655047719647445012')//636204938460004362
    let IDcard = client.emojis.get('636204938460004362')
    let users = client.emojis.get('636204938384375828')
    let birthday = client.emojis.get('631441912381046804')
    let configs = client.emojis.get('636205476459315201')//668795627437555747
    let msger = client.emojis.get('668795627437555747')//636204938464198656
    let setting = client.emojis.get('636204938464198656')
    let blist = client.emojis.get('636205128361443328')
    const create = Date.now()//🔒
    let embed = new Discord.RichEmbed()
    .setColor(`PURPLE`)
    .setAuthor(`TIME`)
    .addField(`${msger} 오늘 날짜와 시간 입니다.`, `${moment(create).tz('Asia/Seoul').format('LLLL')}`)
    message.channel.send(embed)
}

exports.config = {
    name: "time",
    aliases: ['시간']
}