require('dotenv').config();
const Discord= require('discord.js');
const PREFIX= process.env.PREFIX;
const botClient=new Discord.Client();

botClient.once('ready',async ()=>{
    console.log('Bot is Ready!!')
});

botClient.on('message', async (message)=>{
    //console.log(message.member);

    //
    if(message.content.includes(PREFIX) && message.content.includes("kick") && message.member.hasPermission(['KICK_MEMBERS']) ){
        //console.log(message.content);
        const member= message.mentions.members.first();
        console.log(message.member.kickable)
        try{
            let kickResponse= await member.kick();
           
            message.channel.send(":wave: "+ kickResponse.displayName +", Thank you for using our channel Good Bye"); 
        }catch(err){
            message.channel.send(":wave: "+ message.author.username +", Boi you dont have permission to kick!! "+err.message); 
        }
          
    }
})


botClient.login(process.env.TOKEN);

