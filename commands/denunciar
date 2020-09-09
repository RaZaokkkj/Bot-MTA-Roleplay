const Discord = require("discord.js");
 
const cor = config.corembed
module.exports.run = async (client, message, args) => {
 
    message.channel.send(`<:__:566341092593631262> ${message.author}, verifique seu privado.`)
   
    message.author.send(`Siga os próximos passos para enviar uma denúncia.\nAntes de começarmos, leia atentamente algumas informações importantes:\n\n- Enviar denúncias falsas ou qualquer mensagem que não seja uma denúncia resultará em punição para você.
- Em caso de denúncias onde um jogador esteja sendo acusado de Hack/Scripts, a prova deve ser em vídeo. Para cancelar a denuncia digite ***cancelar***
\`\`\`fix
Digite o nickname e a id do usuário que deseja denunciar.\`\`\`
 *(30 segundos para respota.)* `
).then(msg => {
    let collector = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
    collector.on('collect', async collected1 => {
        var usuario = collected1.content
        if(collector.content === "cancelar"){
            msg.delete()
        }
       
    //Collector descrição
        message.author.send(`
Seu progresso autal: [\`██████....\`]66% concluido.
\`\`\`fix
Digite o por que você deseja denunciar este usuário.\`\`\`
\*(60 segundos para resposta)\*
`).then(msg => {
        let collector2 = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
        collector2.on('collect', async collected1 => {
            var descricao = collected1.content
           
    //Collector Provas
            message.author.send(`
Seu progresso autal: [\`█████████.\`]99% concluido.
\`\`\`fix
Certo, agora insira as provas desta sugestão. Lembre-se de insirir o **LINK** das imagens!\`\`\`
 \*(120 minutos para resposta.)\*
`).then(msg => {
            let collector3 = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
            collector3.on('collect', async collected1 => {
                var prova = collected1.content
               
    let denúncias = new Discord.RichEmbed()
    .setAuthor(client.user.username , client.user.displayAvatarURL)
    .setColor(cor)
    .addField('Usuário denunciado:' , usuario , true)
    .addField('Descição da prova:' , descricao , true)
    .addField('Provas:' , prova , true)
    .addField('Denunciado por:' , message.author)
    .setFooter('|👍 Denúncia aceita|❌ Denúncia negada|👀 Denúncia em análise')
    .setThumbnail(`https://cdn.discordapp.com/emojis/691766365266116688.gif?v=1`)
 
let canal = message.guild.channels.find(canal => canal.name === "denúncias");
    if (!canal) return message.reply("Crie um canal chamado #denúncias");
 
    message.delete();
    canal.send(denúncias)
    message.author.send('Seu progresso autal: [\`██████████\`]100% concluido.')
    message.author.send('Denuncia enviada com sucesso! Aguarde a analise dos staffs.')
 
        });
    });
});
});
});
});
 
 
}
 
module.exports.help = {
    name: "denunciar"
}
