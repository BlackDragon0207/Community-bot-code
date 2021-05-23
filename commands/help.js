const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    const create = Date.now()
    let command = client.emojis.get('764465403312209930')
    let Developers = client.emojis.get('702358853957976155')
    let java = client.emojis.get('714290612194771015')
    let settings = client.emojis.get('687497858525560861')
    let git = client.emojis.get('777009119395708990')
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`BlackDragon Community Bot 도움말`, client.user.displayAvatarURL)
    .setDescription(`**해당 봇은 흑룡 커뮤니티의 오피셜 봇입니다.**`)
    .addField(`${Developers} **Developers**`, `**ArdanKR & 흑룡**`)
    .addField(`${settings} **Coding Program**`, `**[discord.js](https://discord.js.org/#/)**`)
    .addField(`${java} **Bot code support**`,`**ArdanKR**`)
    .addField(`${git} **Hosting Server**`, `**Heroku, Github**`)
    .addField(`⛔ **Copyright Holding**`, `**ArdanKR, 흑룡**`)
    .addField(`${command} **Command Help**`,`**D_commands**`)
    message.channel.send(embed)
}

exports.config = {
    name: "help",
    aliases: ['도움']
}