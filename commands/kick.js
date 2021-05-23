const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    const create = Date.now()
    
    if(!message.member.hasPermission(["KICK_MEMBERS","ADMINISTRATOR"])) return message.channel.send(`> You don't have permissions for run this cmd. [ REQUIRES ADMINISTRATOR ]`)
    let kickMember = message.mentions.members.first()
    if(!kickMember) return message.channel.send(`> 내보낼 사용자를 맨션하주세요.\nhttps://cdn.discordapp.com/attachments/647648929374273592/670853851909324800/20200126135330.png`)

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "이유 확인안됨."

    if(!message.guild.me.hasPermission(["KICK_MEMBERS","ADMINISTRATOR"])) return message.channel.send("킥 프로세스 종료됨. [ 관리자 권한 없음. ]")
    let admin = message.member
    let kickedEmbed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`${message.guild.name} 에서 추방되었음을 알려드립니다.`, kickMember.displayAvatarURL)
    .addField(`**추방된 사용자**`, `${kickMember}`)
    .addField(`**추방한 관리자**`, `${admin}`)
    .addField(`**추방된 이유**`, `${reason}`)
    .addField(`**kick | ban**`, `kick`)
    kickMember.send(kickedEmbed)
    let kicEmbed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`한 유저가 ${message.guild.name} 서버에서 추방되었음을 알려드립니다.`, kickMember.displayAvatarURL)
    .addField(`**추방된 사용자**`, `${kickMember}`)
    .addField(`**추방한 관리자**`, `${admin}`)
    .addField(`**추방된 이유**`, `${reason}`)
    .addField(`**kick | ban**`, `kick`)
    kickMember.kick(reason)
    message.channel.send(kicEmbed)
}

exports.config = {
    name: "kick",
    aliases: ['킥', 'k']
}