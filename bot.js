const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const bot = new Discord.Client();
const fs = require("fs");
const { readdirSync } = require("fs");
client.prefix = config.prefix;
const http = require("http");
const express = require("express");
const app = express();
const Gamedig = require('gamedig')
const prefix = config.prefix
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
client.on("ready", () => { console.log("bot iniciado") });
client.on("message", async message => {
  if (message.author.bot.id ) return;
  if (message.author.id === client.user.id) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].toLowerCase()
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1)
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args)
  } catch (err) {
    if (err.code == "MODULE_NOT_FOUND") return;
    console.log(err);
  }
})

client.on("ready", () => {
  console.log('bot online')
  let status = [
    {name:`${client.users.size} pessoas!`, type: 'LISTENING'},
    {name:` Nome do servidor`, type: 'PLAYING'},
    {name:`MTA`, type: 'STREAMING', url:'https://twitch.tv/Consciência'}
    
]
function setStatus(){ //Função para o BOT mudar de Status aleatoriamente
    let randomStatus = status[Math.floor(Math.random()*status.length)]
    client.user.setPresence({game: randomStatus})
}
setStatus();
setInterval(() => setStatus(),4000)
})


client.on("message", async message => {
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
//RegEx com as expressões que normalmente tem na maioria dos links de convites e suas variantes.
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
//Se o conteúdo da mensagem for um convite, o bot apagará a mensagem após um segundo.
      await message.channel.send(
        `${message.author} **você não pode postar link de outros servidores aqui, se inssistir vai acabar banido!**`
      );
//Envia um aviso que ele não pode postar convites naquele chat.
  }
});







client.login(process.env.TOKEN);
