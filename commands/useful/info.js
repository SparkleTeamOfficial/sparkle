const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    console.log("penis");

let bicon = bot.user.displayAvatarURL;
let infoembed = new Discord.RichEmbed(true)
.setAuthor(bot.user.username, bot.user.displayAvatarURL)
.setDescription("Bot Information")
.setColor("#0xFFB6C1")
.setThumbnail(bicon)
.addField("Bot Name", bot.user.username)
.addField("Library", "JavaScript")
.addField("Version", "1.0.0")
.addField("Invite Sparkle!", "https://goo.gl/925xLt")
.addField("Contributors", "Kotz#5953, White Wolf#9289 & [zGódZ] Chukii 愛 [Uncaged]#8274")
.addField("Developers", "niels#0001 & Joeyy#3118")
.setFooter("We're happy that you use Sparkle!", bot.user.displayAvatarURL);

message.channel.send(infoembed);

};