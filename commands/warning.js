const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });


  let admin = message.member
  let warnEmbed = new Discord.RichEmbed()
  .setAuthor("한 유저가 서버에서 경고가 부여 되었음을 알려드립니다.")
  .setColor(`#FFFFFF`)
  .addField(`**경고 부여자**`, `${admin}`)
  .addField(`**경고 대상**`, `<@${wUser.id}>`)
  .addField(`**경고 횟수**`, warns[wUser.id].warns)
  .addField(`**경고 사유**`, reason);

  let warnchannel = message.guild.channels.find(`name`, "🚫│처벌기록");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);


  if(warns[wUser.id].warns == 8){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`)
  }

}

module.exports.config = {
  name: "warn",
  aliases: ['경고']
}