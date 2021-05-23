const Discord = require('discord.js')
const weather = require('weather-js')
const moment = require('moment')
moment.locale('ko-KR')

exports.run = async (client, message, args) => {
    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
    if(!args[0]) return message.channel.send('날씨를 검색할 지역을 입력해 주세요')

        if(result === undefined || result.length === 0) return message.channel.send('**알수없는 지역** 입니다');

        var current = result[0].current;
        var location = result[0].location;

        let embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`${current.observationpoint}의 날씨 정보 입니다`)
        .setThumbnail(current.imageUrl)
        .setColor('#FFFFFF')
        .addField('시간 종류', `GMT-${location.timezone}`, true)
        .addField('온도 타입', '섭씨', true)
        .addField('온도', `${current.temperature}°`, true)
        .addField('풍향', current.winddisplay, true)
        .addField('체감 온도', `${current.feelslike}°`, true)
        .addField('습도', `${current.humidity}%`, true)
        message.channel.send(embed)
    })        
}

    module.exports.config = {
        name: "날씨",
        aliases: ['weather', 'wa']
    }