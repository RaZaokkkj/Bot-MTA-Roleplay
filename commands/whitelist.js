const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")
 
module.exports.run = async (client,message,args) => {
 
      message.channel.send(new RichEmbed()
    .setDescription(`✅ | Verifique sua DM, ${message.author} !`)
    .setColor("FFAA00")
    .setFooter(message.author.username)
    .setTimestamp(new Date())
   
    )
 
    const msg = await message.author.send(new RichEmbed()
    .setDescription(`
Olá, **${message.author.tag}** !
 
 Seja bem vindo ao nosso sistema de whitelist. Responda as seguintes perguntas, e aguarde ela ser lida para poder entrar em nosso servidor!
 
Desejo-lhe uma boa sorte!
 
Primeiro, diga o Nome do seu personagem, e conte sua história em no mínimo 5 linhas!`)
    .setColor("BLUE")
    ),
    filter = (m) => m.author.id === message.author.id,
    collector = msg.channel.createMessageCollector(filter, { max: 1})
   
//PERGUNTA 2
 
    collector.on('collect', async (msg) => {
      const msg2 = await message.author.send(new RichEmbed()
      .setDescription(`2) O que é PowerGaming? `)
      .setColor("BLUE")                                
    ),
    filter2 = (m) => m.author.id === message.author.id,
    collector = msg.channel.createMessageCollector(filter2, { max: 1})
     
//PERGUNTA 3
     
    collector.on('collect', async (msg2) => {
      const msg3 = await message.author.send(new RichEmbed()
      .setDescription(`3) O que é MetaGaming?`)
      .setColor("BLUE")                                
    ),
    filter3 = (m) => m.author.id === message.author.id,
    collector = msg.channel.createMessageCollector(filter3, { max: 1})
     
//PERGUNTA 4
 
    collector.on('collect', async (msg3) => {
      const msg4 = await message.author.send(new RichEmbed()
      .setDescription(`4) O que é VDM? E RDM?`)
      .setColor("BLUE")                                
    ),
    filter4 = (m) => m.author.id === message.author.id,
    collector = msg.channel.createMessageCollector(filter4, { max: 1})
 
//PERGUNTA 5
     
    collector.on('collect', async (msg4) => {
      const msg5 = await message.author.send(new RichEmbed()
      .setDescription(`5) Durante uma perseguição policial você perde o controle do veículo e capota, o que você faria em seguida?`)
      .setColor("BLUE")                                
    ),
    filter5 = (m) => m.author.id === message.author.id,
    collector = msg.channel.createMessageCollector(filter5, { max: 1})
 
//PERGUNTA 6
     
    collector.on('collect', async (msg5) => {
      const msg6 = await message.author.send(new RichEmbed()
      .setDescription(`6) Dentro do RP, o que seria AMOR À VIDA?`)
      .setColor("BLUE")                                
    ),
    filter6 = (m) => m.author.id === message.author.id,
    collector = msg.channel.createMessageCollector(filter6, { max: 1})
 
//PERGUNTA 7
     
    collector.on('collect', async (msg6) => {
      const msg7 = await message.author.send(new RichEmbed()
      .setDescription(`7) Dentro do RP, o que é Combat Logging?`)
      .setColor("BLUE")                                
    ),
    filter7 = (m) => m.author.id === message.author.id,
    collector = msg.channel.createMessageCollector(filter7, { max: 1})
     
      //OBRIGADO
     
 
    collector.on('collect', async (msg7) => {
      const msg8 = await message.author.send(new RichEmbed()
      .setDescription(`Obrigado por enviar sua whitelist! Brevemente a staff entrará em contato para lhe informar se você foi aprovado ou não. Digite "Confirmar" para enviar sua resposta ou "Cancelar" caso não queira mais.`)
      .setColor("BLUE")                                
    ),
    filter8 = (m) => m.author.id === message.author.id,
    collector = msg.channel.createMessageCollector(filter8, { max: 1})
 
 
//RESPOSTAS
     
    collector.on('collect', async (msg8) => {
       
    let channels = message.guild.channels.find(canal => canal.name === "whitelist");
    if (!channels) return message.reply("Crie um canal chamado #whitelist");
        channels.send(new RichEmbed()
        .setTitle('Novo formulário enviado!')
        .addField(`Nome e história do personagem: **${msg.content}** `)
        .setColor('BLUE')
        .addField(`O que é PowerGaming?`, `${msg2.content}`)
        .addField(`O que é Metagaming`, `${msg3.content}`)
        .addField(`O que é VDM? E RDM?`, `${msg4.content}`)
        .addField(`Durante uma perseguição policial você perde o controle do veículo e capota, o que você faria em seguida?`, `${msg5.content}`)
        .addField(`O que é amor a vida?`, `${msg6.content}`)
        .addField(`Qual seu serial? (no MTA, digite serial no f8)`, `${msg7.content}`)
)
    })
    })
    })
    })
    })
    })
    })
    })
}
 
      module.exports.help = {
        name: "whitelist"
      }
