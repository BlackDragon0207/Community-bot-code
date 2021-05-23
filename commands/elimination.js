const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
  let amount = args[0]
  if(amount >= 100){ return message.channel.send("99개 이상의 메세지는 삭제가 불가능 합니다. :(") }
  if(message.member.hasPermission("ADMINISTRATOR")){
  message.channel.bulkDelete(amount).then(()=> {
    message.channel.send(`${amount}개의 메세지를 청소했습니다.`)
})
} else {
    message.channel.send("해당 명령어는 관리자용 명령어 입니다.")
}
}

exports.config = {
    name: "청소",
    aliases: []
}