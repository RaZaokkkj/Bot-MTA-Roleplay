const Discord = require("discord.js")
const Gamedig = require('gamedig');


module.exports.run = async(client, message, args) => {
 Gamedig.query({
        type: 'mtasa', // multi theft auto
        host: '198.50.158.196', // ip adrsese
        port: '22003' // default ir 22003
        }).then(async state => {
        let lista = []
        let players = state['players']
    let i
   for(i = 0; i < players.length; i++){
  await lista.push(players[i].name.replace(/[|]/g, " ").replace(/[`]/g, " "))
   }
   console.log(lista.length)
   let conta;
   if(lista.length > 60){
     conta = lista.length /2
     console.log("Lista maior que 60, duas páginas.")
   } else {
     conta = 50
     console.log("Lista menor ou igual a 50, uma página.")
   }
   var segunda_pagina;
   if(lista.length <= 50){
     segunda_pagina = 0
     console.log("Não vai ter segunda página.")
   } else {
     segunda_pagina = 1
     console.log("Vai ter segunda página.")
   }
   console.log(conta)
   await  message.channel.send(new Discord.RichEmbed().setDescription(lista.slice(0, conta))).then(async msg => {
     if(segunda_pagina === 1){
        await msg.react("➡️")
       const admfilterOPA2 = (reaction, user) =>
              reaction.emoji.name === "➡️" && user.id === message.author.id;
            const admOPA2 = msg.createReactionCollector(admfilterOPA2, {
              time: 100000
            })
            admOPA2.on("collect", async bot => {
            await msg.edit(new Discord.RichEmbed().setDescription(lista.slice(conta, lista.length)))
            })
     }
   })
   

        })
  
      };
