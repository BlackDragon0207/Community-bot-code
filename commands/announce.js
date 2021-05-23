const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    if(!message.author.id == "435800525389430804" || !message.author.id == "690504046905393182") return message.channel.send(`관리자 전용 명령어 입니다. 당신은 사용 하실 수 없습니다.`)
    if(message.author.id == "435800525389430804" || message.author.id == "690504046905393182"){
    const create = Date.now()
    let ann = message.content.split('D_공지 ')[1]
    if(ann === undefined) return message.channel.send('공지할 문장을 적어주세요')
    let embed = new Discord.RichEmbed()
    .setAuthor(`BlackDragon Community Bot`, client.user.displayAvatarURL)
    .setDescription(`${ann}`)
    .setFooter(`인증됨: ${message.author.tag} | ${moment(create).format('LLLL')}`, message.author.displayAvatarURL)
    client.channels.get("827446940799074304").send(embed).then(msg => {
        msg.react('✅').then
    })
    }
}

exports.config = {
    name: "공지",
    aliases: []
}