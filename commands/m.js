const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    const create = Date.now()
    let Black = client.emojis.get('825721769549627433')
    let Black_1 = client.emojis.get('825722170164248606')
    let Black_2 = client.emojis.get('825721838138425364')
    let Black_3 = client.emojis.get('825721882266697738')
    let Black_4 = client.emojis.get('777075390484447252')
    let Black_5 = client.emojis.get('825722274073280523')
    let Black_6 = client.emojis.get('776772936748630037')

    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`[ BlackDragon Community ]`)
    .addField(`${Black} **커뮤니티 개설 이유**`, '`해당 커뮤니티는 유튜브 채널 흑룡의 디스코드 서버 입니다`')
    .addField(`${Black_1} **커뮤니티의 목적**`, '`흑룡유튜브 시청자분들과 다른 디스코드를 사용하시는 유저분들 간의 친목을 다지기 위해 만들어진 서버 입니다`')
    .addField(`${Black_2} **주의 사항 [ 1 ]**`, '`커뮤니티 내에서 대화중 상대방을 불쾌하게 하는 발언은 자제해주세요`')
    .addField(`${Black_3} **주의 사항 [ 2 ]**`, '`디스코드 프로필을 통해 저에게 친구추가 요청을 하지 말아주시길 바랍니다`')
    .addField(`${Black_4} **디스코드 가이드라인**`, "`디스코드 가이드라인을 준수해주세요`\n[디스코드 가이드라인](https://discord.com/guidelines)")
    .addField(`${Black_5} **처벌 관련 내용**`, '`위 사항을 지키지 않을 시 경고 또는 뮤트 심할 경우 즉각 밴처리가 됩니다`') 
    .addField(`${Black_6} **서버 초대 링크**`, "[디스코드 초대](https://discord.com/invite/XCpAAYY)")
  
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}

exports.config = {
    name: "comm",
    aliases: ['커뮤니티']
}