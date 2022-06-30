const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


client.once('ready',()=>{
    console.log("Bot is online! ");
});

client.on('message', message => {
   
      if (message.content.startsWith("/Diana ")) {
         if(message.member.roles.cache.has('967710676921483266') || message.member.roles.cache.has('967708555727736842') || message.member.roles.cache.has('967712610202058756'))
         {
   

         let input = message.content.split(" ").slice(1).join(" "); // Removes the prefix

         message.delete(); // Deletes the message
         message.channel.send(input);//.then(msg=>msg.delete({timeout:"5000"}) <- if you want delete it with delay and sends the finished text
         }
         else{
            message.channel.send("You're not worthy to use the bot!");
         }
      }
   
   


});












client.login('OTg5MDc3MzM2NTE3NDAyNjc0.GmQ0f3.LU-DPe0EG3bQL5nQTUUkVa9QqVRHBKNBkX3Vjo');