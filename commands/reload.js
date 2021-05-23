const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')
const devs = [
    "435800525389430804","690504046905393182"
]

module.exports.run = async (bot, message, args) => {
    if (!devs.includes(message.author.id)) return message.channel.send(`${message.author} 님, 이 명령어는 개발자 전용입니다.`)
    if(!args[0]) return message.channel.send("리로드할 파일이 없습니다!")

    let commandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)] // usage !reload <name>
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`다시 로드할 수 없음: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`명령어 \`${args[0].toUpperCase()}\` 리로드가 완료 되었습니다`)

}


module.exports.config = {
    name: "reload",
    description: "reloads a bot command!",
    usage: "D_reload",
    accessableby: "Bot Owner",
    aliases: ["creload"]
}