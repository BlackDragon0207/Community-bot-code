const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    let youtube = client.emojis.get('777485062223560736')
    const create = Date.now()
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`BlackDragon YouTube`, client.user.displayAvatarURL)
    .addField(`${youtube}**흑룡유튜브 채널**`, `\n흑룡유튜브 구독 한번씩 해주세요!\n**[흑룡유튜브 바로가기](https://www.youtube.com/c/흑룡유튜브)**`)
    message.channel.send(embed)
}

exports.config = {
    name: "blackdragonyoutube",
    aliases: ['흑룡유튜브']
}