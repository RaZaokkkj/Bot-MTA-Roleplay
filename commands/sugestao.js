const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
 
exports.run = (client, message, args) => {
 
    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("Insira sua sugestão.")
 
    let embed = new Discord.RichEmbed()
        .setColor("36393e")
        .addField("**Sugestão**", `${sugestao}`)
        .setFooter(`Sugestão enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp(new Date())
 
    let canal = message.guild.channels.find(canal => canal.name === "sugestões");
    if (!canal) return message.reply("Crie um canal chamado #sugestões");
 
    message.delete();
    canal.send(embed).then(msg => msg.react("👍").then(r => msg.react("👎")));
}
 
exports.help = {
    name: "sugestao"
}
