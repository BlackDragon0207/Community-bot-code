const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    const create = Date.now()
    let settings = client.emojis.get('777009105356718112')
    let owner = client.emojis.get('714091211392155699')
    let card = client.emojis.get('777042273350713354')
    let discord = client.emojis.get('702358918927482972')
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setThumbnail(client.user.displayAvatarURL)
    .setAuthor(`[ BlackDragon Community Bot command List ]`)
    .addField(`${settings} **Developers Only [ 개발자 명령어 ]**`, '`cmd <코드>, reload <js파일>, serverlist, 공지`')
    .addField(`${owner} **Server management [ 서버 관리 명령어 ]**`,'`mute <@맨션>, unmute <@맨션>, ban <@맨션>, unban <ID>, kick <@맨션>, 청소, 경고 <@맨션> <사유>`')
    .addField(`${card} **Basics Command [ 기본 명령어 ]**`, '`commands, blackdragonyoutube, uptime, ping, botinfo, time, userinfo, weather`')
    .addField(`${discord} **BlackDragon Community [ 흑룡 커뮤니티 ]**`,"해당 봇은 흑룡 커뮤니티의 오피셜 봇 입니다.\n\n 서버 바로가기 : [BlackDragon Community](https://discord.gg/XCpAAYY)")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}

exports.config = {
    name: "commands",
    aliases: ['cmds', '커맨드목록']
}