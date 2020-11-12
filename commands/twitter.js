const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
 
exports.run = (client, message, args) => {
 
    let twt = args.join(" ");
    if (!twt) return message.reply("Insira sua mensagem.")
 
    let embed = new Discord.RichEmbed()
        .setColor("36393e")
        .addField("**Twitter**", `${twt}`)
        .setFooter(`Novo Twit Recebido: ${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp(new Date())
 
    let canal = message.guild.channels.find(canal => canal.name === "twitter");
    if (!canal) return message.reply("Crie um canal chamado #twitter");
 
    message.delete();
    canal.send(embed).then(msg => msg.react("🔁").then(r => msg.react("❤")));
}
 
exports.help = {
    name: "twitter"
}
