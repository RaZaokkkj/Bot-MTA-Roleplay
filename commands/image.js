const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
  let sddsdela = message.mentions.channels.first();
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Desculpe, você não pode fazer isso");
                       if(!sddsdela) return message.channel.send(new Discord.RichEmbed()
        .setDescription(`\`\`\` A maneira de usar o comando é \`\`\``)
        .addField('**Exemplo**',`> ** [prefix]image [#channel] "URL" **`)                                                                            
       .setFooter(message.author.tag)                                                                              
       .setTimestamp());
   message.channel.send("@everyone")
let corno = message.content.split(/ +/).slice(2).join(' ');
                       if(!corno) return message.channel.send(new Discord.RichEmbed()
        .setDescription(`\`\`\`  A maneira de usar o comando é \`\`\``)
        .addField('**Exemplo**',`> ** [prefix]image [#channel] "URL" **`)                                                                            
       .setFooter(message.author.tag)                                                                              
       .setTimestamp());message.guild.channels.get(sddsdela.id).send({
files: [{ name:"consciencia.png", attachment:corno}]
}).catch(yy => { message.channel.send("URL não é válida")});
    message.delete();
}
