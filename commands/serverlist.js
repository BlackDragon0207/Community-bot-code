const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')
const devs = [
    "435800525389430804","690504046905393182"
]

exports.run = async (client, message, args) => {
    if (!devs.includes(message.author.id)) return message.channel.send(`${message.author} 님, 이 명령어는 개발자 전용입니다.`)

    let embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setThumbnail(client.user.displayAvatarURL)
    .setAuthor(`[ BlackDragon Community Bot serverlist ]`)
    .setDescription(client.guilds.map(r => r.name))
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}

exports.config = {
    name: "serverlist",
    aliases: ['서버리스트']
}