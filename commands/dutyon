const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');

exports.run = (bot,message,args) => {

    let embed = new Discord.RichEmbed()

    .setTitle(`REGISTRO DE SERVIÇO!`)
    .setDescription('Entrou em serviço!')
    .setColor("GREEN")
    .setFooter(`autor : ${message.author.tag} `,`${message.author.avatarURL}`)
    .setTimestamp(Date.now())
    .setThumbnail(`https://cdn.discordapp.com/attachments/717054548396605531/727410417290182736/carregando.gif`);

    message.channel.send(embed);
}

exports.help = {

    name: "dutyon"
}
