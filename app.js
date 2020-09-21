require('dotenv').config();
const Discord= require('discord.js');
const PREFIX= process.env.PREFIX;
const botClient=new Discord.Client();

botClient.once('ready',async ()=>{
    console.log('Bot is Ready!!')
});

botClient.on('message', async (message)=>{
    console.log(message.content);
})


botClient.login(process.env.TOKEN);

