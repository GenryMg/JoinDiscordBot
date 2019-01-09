const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "YOUR_PREFIX";

client.login('YOUR_TOKEN');

client.on("ready", () => {
	console.log("[JblusCode] -> You have Enable");
	client.user.setGame("YOUR_SET_GAME");
});

/*Join*/
client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** joined ' + member.guild.name)
        .setFooter('We are now ' + member.guild.memberCount)
    member.guild.channels.get('CHANNEL_ID').send(embed)
});

/*Quit*/
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** left ' + member.guild.name)
        .setFooter('We are now ' + member.guild.memberCount)
    member.guild.channels.get('CHANNEL_ID').send(embed)
 
});

