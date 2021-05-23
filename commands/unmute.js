const Discord = require('discord.js')
const superagent = require("superagent");
const moment = require('moment')
moment.locale('ko-KR')

module.exports.run = async (bot, message, args) => {
    // check if the command caller has permission to use the command
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("이 명령어는 관리자용 명령어 입니다.");
    
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("언뮤트 프로세스 종료됨. [ 권한이 부족 합니다 ]")
    
    //define the reason and unmutee
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("뮤트 해제할 사용자를 설정해주세요!");
    
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "이유 확인안됨."
    
    //define mute role and if the mute role doesnt exist then send a message
    let muterole = message.guild.roles.find(r => r.name === "mute")
    if(!muterole) return message.channel.send("제거할 역할이 없습니다.")
    
    //remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
    mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`당신은 ${message.guild.name}에서 뮤트가 해제되었습니다.\n사유 : ${reason}`).catch(err => console.log(err))
        message.channel.send(`${mutee.user.username}님께서 뮤트가 해제되었습니다.`)
    })
    
    //send an embed to the modlogs channel
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`한 유저가 ${message.guild.name} 서버에서 뮤트 해제되었음을 알려드립니다.`)
    .addField("**뮤트 해제된 사용자**", mutee.user.username)
    .addField("**뮤트 해제한 관리자**", message.author.username)
    .addField("**뮤트 해제된 이유**", reason)
    .addField("**뮤트 해제된 날짜**", message.createdAt.toLocaleString())
    message.channel.send(embed)    
    }
    
    
    module.exports.config = {
        name: "unmute",
        description: "Unmutes a member in the discord!",
        usage: "D_unmute <user> <reason>",
        accessableby: "Members",
        aliases: ["unm", "speak"]
    }