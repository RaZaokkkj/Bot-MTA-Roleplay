const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');

exports.run = (bot,message,args) => {

    let embed = new Discord.RichEmbed()

    .setTitle(`REGISTRO DE SERVIÇO!`)
    .setDescription('Saiu de serviço!')
    .setColor("RED")
    .setFooter(`autor : ${message.author.tag} `, `${message.author.avatarURL}`)
    .setTimestamp(Date.now())
    .setThumbnail(`https://cdn.discordapp.com/attachments/717054548396605531/727410606684241930/CDCnpertube.gif`);

    message.channel.send(embed);
}

exports.help = {

    name: "dutyoff"
}
