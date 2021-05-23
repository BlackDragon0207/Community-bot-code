const Discord = require('discord.js')
const superagent = require("superagent");
const moment = require('moment')
moment.locale('ko-KR')

module.exports.run = async (bot, message, args) => {
    // check if the command caller has permission to use the command
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");
    
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")
    
    //define the reason and mutee
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("뮤트 할 사용자를 설정해주세요! ");
    
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "이유 확인 안됨."
    
    //define mute role and if the mute role doesnt exist then create one
    let muterole = message.guild.roles.find(r => r.name === "mute")
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "mute",
                color: "#514f48",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
        } catch(e) {
            console.log(e.stack);
        }
    }
    
    //add role to the mentioned user and also send the user a dm explaing where and why they were muted
    mutee.addRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`당신은 ${message.guild.name}에서 뮤트 되셨습니다\n사유 : ${reason}`).catch(err => console.log(err))
        message.channel.send(`${mutee.user.username}님께서 뮤트 되셨습니다.`)
    })
    
    //send an embed to the modlogs channel
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`${message.guild.name} 서버에서 뮤트되었음을 알려드립니다.`)
    .addField("**뮤트된 사용자**", mutee.user.username)
    .addField("**뮤트한 관리자**", message.author.username)
    .addField("**뮤트된 이유**", reason)
    .addField("**뮤트된 날짜**", message.createdAt.toLocaleString())
    message.channel.send(embed)    
}
    
    module.exports.config = {
        name: "mute",
        description: "Mutes a member in the discord!",
        usage: "D_mute <user> <reason>",
        accessableby: "Members",
        aliases: ["m", "nospeak"]
    }