const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    const create = Date.now()
    
    if(!message.member.hasPermission(["KICK_MEMBERS","ADMINISTRATOR"])) return message.channel.send(`> You don't have permissions for run this cmd. [ REQUIRES ADMINISTRATOR ]`)
    let banMember = message.mentions.members.first()
    if(!banMember) return message.channel.send(`> 내보낼 사용자를 맨션하주세요.\nhttps://cdn.discordapp.com/attachments/647648929374273592/670853851909324800/20200126135330.png`)

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "이유 확인안됨."

    if(!message.guild.me.hasPermission(["KICK_MEMBERS","ADMINISTRATOR"])) return message.channel.send("킥 프로세스 종료됨. [ 관리자 권한 없음. ]")
    let admin = message.member
    let bannedEmbed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(` ${message.guild.name} 서버에서 차단되었음을 알려드립니다.`)
    .addField(`**차단된 사용자**`, `${banMember}`)
    .addField(`**차단한 관리자**`, `${admin}`)
    .addField(`**차단된 이유**`, `${reason}`)
    .addField(`**kick | ban**`, `ban`)
    banMember.send(bannedEmbed)
    let banndEmbed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`한 유저가 ${message.guild.name} 서버에서 차단되었음을 알려드립니다.`)
    .addField(`**차단된 사용자**`, `${banMember}`)
    .addField(`**차단한 관리자**`, `${admin}`)
    .addField(`**차단된 이유**`, `${reason}`)
    .addField(`**kick | ban**`, `ban`)
    banMember.ban(reason)
    message.channel.send(banndEmbed)
}

exports.config = {
    name: "ban",
    aliases: ['밴', 'b']
}