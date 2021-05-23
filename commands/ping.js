const Discord = require('discord.js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    const create = Date.now()
    let wait = await message.channel.send(`${client.emojis.get('668796958881742859')} Please Wait..`)
    let embed = new Discord.RichEmbed()
    .setAuthor(`SPM_Client Ping`, client.user.displayAvatarURL)
    .addField(`\n${client.emojis.get('668795590263439370')} **Ping API**`, `__**${Math.round(client.ping)}ms**__`)
    .addField(`\n${client.emojis.get('668795627437555747')} **Message Delay**`, `__**${wait.createdTimestamp - message.createdTimestamp}ms**__`)
    //${botping.createdTimestamp - message.createdTimestamp}ms
    .setFooter(`${moment(create).format('LLLL')}`)
    wait.edit(embed)
}

exports.config = {
    name: "ping",
    aliases: ['핑', '반응속도']
}