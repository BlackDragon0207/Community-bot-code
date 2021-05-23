const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
        if(!message.mentions.members.first()) return message.reply("정보를 확인 할 유저를 맨션해주세요")
        const user = message.mentions.members.first() 
        if (!user) message.reply("해당 유저를 서버에서 찾을 수 없습니다")
        let avatar = user.user.displayAvatarURL
        let name = user.user.tag
        let discrim = user.user.discriminator
        let userid = user.user.id
        let status = user.user.presence.status
        let register = moment(message.guild.members.get(user.id).user.createdAt).format(`LLLL`)
        let joined = moment(message.guild.members.get(user.id).joinedAt).format(`LLLL`)
        let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(`${name} 님의 정보입니다.`, avatar)
        .setThumbnail(avatar)
        .addField(`유저 닉네임`, `${name}`)
        .addField(`유저 태그`, `${discrim}`)
        .addField(`유저 ID`, `${userid}`)
        .addField(`상태`, `${status}`)
        .addField(`디스코드 가입일`, register)
        .addField(`서버 가입일`, joined)
    
        message.channel.send(embed)
    }

exports.config = {
    name: "userinfo",
    aliases: ['유저정보']
}