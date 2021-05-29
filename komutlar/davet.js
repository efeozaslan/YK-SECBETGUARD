const Discord = require('discord.js');

let botid = ('846041802267951104') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} İletişim Bilgileri`)
    .addField('BİZ KİMİZ?', 'anonım ekıbının admını ykısecbet olarak her ıse ve networkun guvenlıgını saglamaya calısan bır ekıbız.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=846041802267951104&scope=bot&permissions=8
) **|** [Destek Sunucusu](https://discord.gg/d42dqUXcZa) **|** [Bota Oy Ver (Vote)](https://discord{botid}/vote) **|** [Web Sitesi ( Yakında )]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'bizkimiz',
  description: 'bot hakkında bilgi',
  usage: 'davetet'
};
   