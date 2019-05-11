const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send('⛔ **Incorrect format.**\n`>ask QUESTION`')
return;
}
        let url = `http://api.wolframalpha.com/v1/conversation.jsp?appid=PKEX2L-X3HXQHTEJQ&i=${args.join(" ")}`
        get(url).then(res => {
if(res.body.error){
return message.reply("I'm not that smart, try it on https://www.google.com c:")
}
            const embed = new Discord.RichEmbed()
            .setColor("fea5ff")
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setThumbnail('https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png')
.setDescription ("I found your answer :)")
.addField("Question:", `${args.join(" ")}`)
.addField("Answer:", res.body.result)
message.channel.send(embed);
        });
    } catch(err) {
        let errchannel = bot.channels.get('523969673239461892')
        errchannel.send(err)
        console.log(err)    
    }
}
module.exports.command = {
    name: 'ask',
    aliases: ["search"],
    usable: "Users",
    description: "Searches the web for an answer.",
    usage: ">ask <QUESTION>",
    category: "Useful",
    enabled: true
};
