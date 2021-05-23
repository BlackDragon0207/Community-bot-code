const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("이 명령어는 관리자용 명령어 입니다.")    

    let bannedMember = await bot.fetchUser(args[0])
    if(!bannedMember) return message.channel.send("밴 해제할 사용자의 ID를 입력해주세요.")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "이유 확인안됨."

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("밴해제 프로세스 종료됨. [ 권한이 부족 합니다 ]")|
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag}님의 밴이 해제 되었습니다`)
    } catch(e) {
        console.log(e.message)
    }

    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`한 유저가 ${message.guild.name} 서버에서 차단 해제되었음을 알려드립니다.`)
    .addField("**차단 해제된 사용자**", `${bannedMember.username} (${bannedMember.id})`)
    .addField("**차단 해제한 관리자**", message.author.username)
    .addField("**차단 해제된 이유**", reason)
    .addField("**차단 해제된 날짜**", message.createdAt.toLocaleString())
    message.channel.send(embed)    
    }

module.exports.config = {
    name: "unban",
    description: "Unban a user from the guild!",
    usage: "D_unban",
    accessableby: "Administrators",
    aliases: ["ub", "unbanish"]
}