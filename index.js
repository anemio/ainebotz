/*
* JANGAN UBAH-UBAH INFO!!!
* "JANGAN MODAL NAMA DOANG BRO!!!"
* SCRIPT BY FADHIL ID
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YY MEMBUAT SCRIPT INI BOSQ
* JANGAN UBAH-UBAH INFO!!!
* SCRIPIT INI DIRECODE OLEH FADHIL ID.
* BOLEH UBAH TAPI KECUALI INFO!!!
*/
const A187 = '🔰_MyBot_🔰'; // JANGAN UBAH-UBAH INFO!!!
const instagram = 'https://instagram.com/nur.fdhl_'; // JANGAN UBAH-UBAH INFO!!!
const nomer = 'wa.me/6283102650464'; // JANGAN UBAH-UBAH INFO!!!
const aktif = 'Tergantung Owner'; // JANGAN UBAH-UBAH INFO!!!
const groupwhatsapp = 'https://bit.ly/3aCaSjI'; // JANGAN UBAH-UBAH INFO!!!
const youtube = 'https://bit.ly/3aNfHH5'; // JANGAN UBAH-UBAH INFO!!!
//A187ID
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const help = require("./lib/help.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const menu = require("./lib/menu.js");
const readTextInImage = require('./lib/ocr')
//A187ID
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");


function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Fadhil Graphy QR code ready scan now!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @nur.fdhl_`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @nur.fdhl_`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   //GroupsA187ID

if (text.includes(".buatgrup"))
   {
var nama = text.split(".buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FFA187ID
if(text.includes(".cek")){
var num = text.replace(/.cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

//ChatA187ID
else if (text == 'assalamualaikum'){
conn.sendMessage(id, ' _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'salam'){
conn.sendMessage(id, ' _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, ' _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, ' _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lah malah ngatain, berani lu:V' ,MessageType.text);
}
else if (text == '#owner'){
conn.sendMessage(id, ' *Owner FADHIL wa.me/6283102650464* ' ,MessageType.text);
}
else if (text == '#help'){
conn.sendMessage(id, ' *Menampilkan Pilihan Menu!!!* ' ,MessageType.text);
}
else if (text == '#menu'){
conn.sendMessage(id, ' *Menampilkan Fitur Menu!!!* ' ,MessageType.text);
}
else if (text == '#info'){
conn.sendMessage(id, ' *Menampilkan Info!!!* ' ,MessageType.text);
}
else if (text == '#donate'){
conn.sendMessage(id, ' *Menampilkan Donasi!!!* ' ,MessageType.text);
}
else if (text == '#creator'){
conn.sendMessage(id, ' *Creator FADHIL wa.me/6283102650464* ' ,MessageType.text);
}
else if (text == 'Pagi'){
conn.sendMessage(id, ' _Pagi juga Kakak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Siang'){
conn.sendMessage(id, ' _Siang juga Kakak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Sore'){
conn.sendMessage(id, ' _Sore juga Kakak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Malam'){
conn.sendMessage(id, ' _Malam juga Kakak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pengin ngentod? babi looo' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing, kontol, memek, ngentod, taik, bangsad!!' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, ' *lu yang bacot_-* ' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Woy'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ '  ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, ' _Iya sayang ada apa? ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, ' _love you too_ ' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, ' _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *#help/#menu* untuk melihat fitur bot kami_ ' ,MessageType.text);
}
else if (text == 'Mksh'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'mksh'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, ' _Sama sama, semoga harimu menyenangkan :)_ ' ,MessageType.text);
}
else if (text == '.pesankosong'){
conn.sendMessage(id, '͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏' ,MessageType.text);
}
// FiturA187ID

if (text.includes('.nulis')){
  var aris = text.replace(/.nulis /, '')
    axios.get('https://bangandre.herokuapp.com/nulis?aris='+aris)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.tts')){
  var aris = text.replace(/.tts /, '')
    axios.get('http://scrap.terhambar.com/tts?kata=${aris}')
    .then((res) => {
      audioToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.audio)
        })
    })
}

if (text.includes(".ytmp3")){
const aris = text.replace(/.ytmp3 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/yta?url=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = `*Judul:* ${res.data.title}\n\n *Zize:* ${res.data.filesize}\n\n *Audio:* ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes('.ytmp3')){
  var teks = text.replace(/.ytmp3 /, '')
    axios.get('https://st4rz.herokuapp.com/api/yta2?url='+teks)
    .then((res) => {
      imageToBase64(res.data.thumb)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.igstalk')){
  var teks = text.replace(/.igstalk /, '')
    axios.get('https://arugaz.herokuapp.com/api/stalk?username='+teks)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
} 
if (text.includes(".igstalk")){
  const aris = text.replace(/.igstalk /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/stalk?username=${aris}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
  let hasil = `BIODATA INSTAGRAM ATAS NAMA _${aris}_ \n\n *Username✍️* : _${res.data.Username}_ \n *Nama✍️* : _${res.data.Name}_ \n *Jumlah Followers✍️* : _${res.data.Jumlah_Followers}_ \n *Jumlah Following✍️* : _${res.data.Jumlah_Following}_ \n *Jumlah Post✍️* : _${res.data.Jumlah_Post}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes(".infogempa")){
  const aris = text.replace(/.infogempa /, "")
  axios.get(`https://arugaz.herokuapp.com/api/infogempa`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
  let hasil = ` *INFO GEMPA* \n\ *Lokasi* : _${res.data.lokasi}_ \n *Kedalaman✍️* : _${res.data.kedalaman}_ \n *Koordinat✍️* : _${res.data.koordinat}_ \n *Magnitude✍️* : _${res.data.magnitude}_ \n *Waktu✍️* : _${res.data.waktu}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes(".chord")){
const aris = text.replace(/.chord /, "")
axios.get(`https://alfians-api.herokuapp.com/api/chord?q=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = `*Nih Cord Lagu ${aris} kak* \n\nCord: _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}


if (text.includes(".ytmp4")){
const aris = text.replace(/.ytmp4 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ytv?url=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Judul:* ${res.data.title}\n\n *Tipe:* ${res.data.ext}\n\n *Resolution:* ${res.data.resolution}\n\n *Zize:* ${res.data.filesize}\n\n *Video:* ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".twt")){
const aris = text.replace(/.twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${aris}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = `âœ…Berhasil$ silahkan klik link di bawah untuk mendownload hasilnya$\nKlik link dibawahðŸ—¡ï¸\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}



if (text.includes(".tiktok")) {
const tictoc = text.replace(/.tiktok /, "")
axios.get(`http://scrap.terhambar.com/tiktokfull?link=${tictoc}`).then((res) => {
	 conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
     let titoe = `âœ…Berhasil$$$ Silahkan klik link dibawah ini untuk mendownload hasilnya$ \nKlik link dibawahðŸ—¡ï¸\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}

if (text.includes(".fb")){
const aris = text.replace(/.fb /, "")
axios.get(`https://arugaz.herokuapp.com/api/fb?url=${aris}`).then((res) => {
    let hasil = `Nih BosQ Pilih...\n\n *Revolusi SD*: ${res.data.result.sd}\n\n *Rovolusi HD:* ${res.data.result.hd}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
  if (text.includes(".checkip"))
  { const aris = text.replace(/.checkip /, "") 
  axios.get(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{ 
  let hasil = `➸ *City* : ${res.data.city}\n*Latitude* : ${res.data.latitude}\n*Longtitude* : ${res.data.longitude}\n*Region* : ${res.data.region_name}\n*Region Code* : ${res.data.region_code}\n*IP* : ${res.data.ip}\n*Type* : ${res.data.type}\n*Name* : ${res.data.name}\n*zip* : ${res.data.zip}\n*Geonime* : ${res.data.location.geoname_id}\n*Capital* : ${res.data.location.capital}\n*Calling* : ${res.data.location.calling_code}\n\n*Country Flag* : ${res.data.location.country_flag}\n\n*CountryFlagEmoji* : ${res.data.location.country_flag_emoji}` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }
 if (text.includes('.map')){
  var aris = text.replace(/.map /, '')
    axios.get('https://mnazria.herokuapp.com/api/maps?search='+aris)
    .then((res) => {
      imageToBase64(res.data.gambar)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}  
 if (messageType == 'imageMessage')
   {
       let caption = imageMessage.caption.toLocaleLowerCase()
       if (caption == '.ocr')
       {
           const img = await conn.downloadAndSaveMediaMessage(m)
           readTextInImage(img)
               .then(data => {
                   console.log(data)
                   conn.sendMessage(id, `${data}`, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
       }
   }
  if (text.includes('.waifu')){
  var aris = text.replace(/.waifu /, '')
    axios.get('https://st4rz.herokuapp.com/api/waifu')
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}  
   if (text.includes(".quotes1")){
 var aris = text.replace(/ /, '')
axios.get(`https://arugaz.herokuapp.com/api/randomquotes`).then((res) => {
    let hasil = `➸  *Author : ${res.data.author}*\n\n\n➸${res.data.quotes}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
    if (text.includes(".puisi1")){
 var aris = text.replace(/ /, '')
axios.get(`https://arugaz.herokuapp.com/api/puisi1`).then((res) => {
    let hasil = `➸ ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
 if (text.includes(".puisi2")){
 var aris = text.replace(/ /, '')
axios.get(`https://arugaz.herokuapp.com/api/puisi2`).then((res) => {
    let hasil = `➸ ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
  if (text.includes(".puisi3")){
 var aris = text.replace(/ /, '')
axios.get(`https://arugaz.herokuapp.com/api/puisi3`).then((res) => {
    let hasil = ` ➸ ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
 if (text.includes('.nekonime')){
  var aris = text.replace(/ /, '')
    axios.get('https://arugaz.herokuapp.com/api/nekonime')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
  if (text.includes('.infogempa')){
  var aris = text.replace(/ /, '')
    axios.get('https://arugaz.herokuapp.com/api/infogempa')
    .then((res) => {
      imageToBase64(res.data.map)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}  
if (text.includes(".say")){
  const teks = text.replace(/.say /, "")
conn.sendMessage(id, teks, MessageType.text)
}

if (text.includes('.ttp')){
  var aris = text.replace(/.ttp /, '')
    axios.get('https://st4rz.herokuapp.com/api/ttp?kata='+aris)
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes(".ping")){
const aris = text.replace(/.ping /, "")
axios.get(`https://api.banghasan.com/domain/nping/${aris}`).then((res) => {
    let hasil = `*query : ${res.data.query}*\n\nhasil : ${res.data.hasil}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
  if (text.includes(".hostsearch")){
const aris = text.replace(/.hostsearch /, "")
axios.get(`https://api.banghasan.com/domain/hostsearch/${aris}`).then((res) => {
    let hasil = `*query : ${res.data.query}*\n\nhasil : ${res.data.hasil}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
 if (text.includes(".zodiak")){
const aris = text.replace(/.zodiak /, "")
axios.get(`https://arugaz.herokuapp.com/api/getzodiak?nama=aruga&tgl-bln-thn=${aris}`).then((res) => {
    let hasil = `➡️ Lahir : ${res.data.lahir}*\n➡ ️ultah : ${res.data.ultah}\n➡ ️usia : ${res.data.usia}\n➡ zodiak : ${res.data.zodiak}️`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
 if (text.includes('.ssweb')){
  var aris = text.replace(/.ssweb /, '')
    axios.get('https://api.haipbis.xyz/ssweb?url='+aris)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}   
    if (text.includes(".hentai"))
   {
    var items = ["nsfwhentai", "anime hentai", "hentai", "nsfwneko"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
if (text.includes(".meme"))
   {
    var items = ["funny meme", "meme", "meme 2020"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
     if (text.includes(".covidcountry")){
const aris = text.replace(/.covidcountry /, "")
axios.get(`https://arugaz.herokuapp.com/api/corona?country=${aris}`).then((res) => {
    let hasil = `Negara : ${res.data.result.country}\n\nActive : ${res.data.result.active}\ncasesPerOneMillion : ${res.data.result.casesPerOneMillion}\ncritical : ${res.data.result.critical}\ndeathsPerOneMillion : ${res.data.result.deathsPerOneMillion}\nrecovered : ${res.data.result.recovered}\ntestPerOneMillion : ${res.data.result.testPerOneMillion}\ntodayCases : ${res.data.result.todayCases}\ntodayDeath : ${res.data.result.todayDeath}\ntotalCases : ${res.data.result.totalCases}\ntotalTest : ${res.data.result.totalTest}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
 if (text.includes(".jadwalTVnow")){
const aris = text.replace(/.jadwalTV /, "")
axios.get(`https://api.haipbis.xyz/jadwaltvnow`).then((res) => {
    let hasil = `Jam : ${res.data.jam}\n\n${res.data.jadwalTV}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
 if (text.includes("#")){
const aris = text.replace(/# /, "")
axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${aris}`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
 if (text.includes('.cooltext')){
  var aris = text.replace(/.cooltext /, '')
    axios.get('https://api.haipbis.xyz/randomcooltext?text='+aris)
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
} 

if (text.includes(".ig")){
const aris = text.replace(/.ig /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ig?url=${aris}`).then((res) => {
    let hasil = `✅Dwonload sendiri link error maaf\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".wiki")){
const aris = text.replace(/.wiki /, "")
axios.get(`https://arugaz.herokuapp.com/api/wiki?q=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *👩‍💻Menurut Wikipedia:👩‍💻* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".wikien")){
const aris = text.replace(/.wikien /, "")
axios.get(`https://arugaz.herokuapp.com/api/wikien?q=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *👩‍💻According to Wikipedia:👩‍💻* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".spamgmail")){
const aris = text.replace(/.spamgmail /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamgmail?target=${aris}&jum=1`).then((res) => {
    let hasil = `${res.data.logs}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}   
if (text.includes(".sholat")){
  const aris = text.replace(/.sholat /, "")
  axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${aris}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
  let hasil = `Jadwal sholat di ${aris} hari ini adalah\n\n⚡Imsyak : ${res.data.Imsyak}\n⚡Subuh : ${res.data.Subuh} WIB\n⚡Dzuhur : ${res.data.Dzuhur}WIB\n⚡Ashar : ${res.data.Ashar} WIB\n⚡Maghrib : ${res.data.Maghrib}\n⚡Isya : ${res.data.Isya} WIB\n⚡Tengah malam : ${res.data.Dhuha} WIB`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}

if (text.includes(".cektanggal")){
  const aris = text.replace(/.cektanggal /, "")
  axios.get(`https://api.haipbis.xyz/harinasional?tanggal=${aris}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
  let hasil = `menurut tanggal ${aris} adalah\n\n *Tanggal* : _${res.data.tanggal}_ \n *Keterangan* : _${res.data.keterangan}_ `;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
else if (text == '.quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.aris}\n\n${res.data.acak.id.aris}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".bitly")){
const aris = text.replace(/.bitly /, "")
axios.get(`https://api.haipbis.xyz/bitly?url=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = `nih kak :) \n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".puisi1")){
const aris = text.replace(/.puisi1 /, "")
axios.get(`https://arugaz.herokuapp.com/api/puisi1`).then((res) => {
conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Nih Puisinya Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".puisi2")){
const aris = text.replace(/.puisi2 /, "")
axios.get(`https://arugaz.herokuapp.com/api/puisi3`).then((res) => {
conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Nih Puisinya Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".cerpen")){
const aris = text.replace(/.cerpen /, "")
axios.get(`https://arugaz.herokuapp.com/api/cerpen`).then((res) => {
conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Nih cerpen Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".cersex")){
const aris = text.replace(/.cersex /, "")
axios.get(`https://arugaz.herokuapp.com/api/cersex2`).then((res) => {
conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Nih cersex Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".quotes1")){
const aris = text.replace(/.quotes1 /, "")
axios.get(`https://arugaz.herokuapp.com/api/randomquotes`).then((res) => {
conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Nih Quotes Kak :)*\n\n *Author* : _${res.data.author}_ \n\n *Quotes* : _${res.data.quotes}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".spamcall")){
const aris = text.replace(/.spamcall /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamcall?no=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *INFO SPAM CALL* \n\n _${res.data.logs}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".bucin")){
const aris = text.replace(/.bucin /, "")
axios.get(`https://arugaz.herokuapp.com/api/howbucins`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` _${res.data.desc}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".ttsid")){
const aris = text.replace(/.tts /, "")
axios.get(`http://scrap.terhambar.com/tts?kata=${aris}`).then((res) => {
	var aris = text.split(".ttsid ")[1];
  var path = require('path');
  var text1 = aris.slice(6);
  text1 = suara;
  var suara = text.replace(/!ttsid/g, text1);
  var filepath = 'mp3/bacot.wav';
  
  
/*
 * save audio file
 */

gtts.save(filepath, suara, function() {
  console.log(`${filepath} MP3 SAVED=`)
});
const buffer = fs.readFileSync(filepath)
	conn.sendMessage(id , buffer , MessageType.audio);

})
}
if (text.includes("minfoanime")){
const aris = text.replace(/.infoanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/dewabatch?q=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *INFO ANIME ${aris} :* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".gay")){
const aris = text.replace(/.gay /, "")
axios.get(`https://arugaz.herokuapp.com/api/howgay`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` ${res.data.desc} \n\n *Persen Gay Lo!!!* _${res.data.persen}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".spamsms")){
const aris = text.replace(/.spamsms /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamsms?no=${aris}&jum=20`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *INFO SPAM SMS 20 PESAN* \n\n _${res.data.logs}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".indohot")){
const aris = text.replace(/.indohot /, "")
axios.get(`https://arugaz.herokuapp.com/api/indohot`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Tobat Bosq* \n\n *Judul* _${res.data.result.judul}_ \n\n *Status* _${res.data.result.genre}_ \n\n *Durasi* _${res.data.result.durasi}_ \n\n *Link Bosq* _${res.data.result.url}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".filmanime")){
const aris = text.replace(/.filmanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Film Anime ${aris} :* \n\n *Judul* _${res.data.result.title}_ \n\n *Rating* _${res.data.result.rating}_ \n\n *Info* _${res.data.result.sinopsis}_ \n\n *Link Video* _${res.data.result.video}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".covidID")){
const aris = text.replace(/.covid /, "")
axios.get(`https://arugaz.herokuapp.com/api/coronaindo`).then((res) => {
conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *🔎DATA WABAH COVID-19 TERBARU DI INDONESIA🔍* \n\n *Kasus Baru* : _${res.data.kasus_baru}_ \n\n *Kasus Total* : _${res.data.kasus_total}_ \n\n *Meninggal* : _${res.data.meninggal}_ \n\n *Negara* : _${res.data.negara}_ \n\n *Penanganan* : _${res.data.penanganan}_ \n\n *Sembuh* : _${res.data.sembuh}_ \n\n *Terakhir* : _${res.data.terakhir}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".ytmp4"))
   {
      const url = text.replace(/.ytmp4 /, "");
      const exec = require('child_process').exec;

      var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

      const ytdl = require("ytdl-core")
      if (videoid != null)
      {
         console.log("video id = ", videoid[1]);
      }
      else
      {
         conn.sendMessage(id, "maaf, link yang anda kirim tidak valid", MessageType.text)
      }
      ytdl.getInfo(videoid[1]).then(info =>
      {
         if (info.length_seconds > 1000)
         {
            conn.sendMessage(id, " videonya kepanjangan", MessageType.text)
         }
         else
         {

            console.log(info.length_seconds)

            function os_func()
            {
               this.execCommand = function (cmd)
               {
                  return new Promise((resolve, reject) =>
                  {
                     exec(cmd, (error, stdout, stderr) =>
                     {
                        if (error)
                        {
                           reject(error);
                           return;
                        }
                        resolve(stdout)
                     });
                  })
               }
            }
            var os = new os_func();

            os.execCommand('ytdl ' + url + ' -q highest -o mp4/' + videoid[1] + '.mp4').then(res =>
            {
		const buffer = fs.readFileSync("mp4/"+ videoid[1] +".mp4")
               conn.sendMessage(id, buffer, MessageType.video)
            }).catch(err =>
            {
               console.log("os >>>", err);
            })

         }
      });

   }
if (text.includes(".resep")){
const aris = text.replace(/.resep /, "")
axios.get(`https://masak-apa.tomorisakura.vercel.app/api/search/?q=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = ` *Judul:* ${results.title}\n*Penulis:* ${results.author.user}\n*Rilis:* ${results.author.datePublished}\n*Level:* ${results.dificulty}\n*Waktu:* ${results.times}\n*Porsi:* ${results.servings}\n\n*Bahan-bahan:*\n${bahan}\n\n*Step-by-step:*\n${tutor}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".namaninja")){
const aris = text.replace(/.namaninja /, "")
axios.get(`https://api.terhambar.com/ninja?nama=${aris}`).then((res) => {
	conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
    let hasil = `Nama Ninja kamu🙂:\n\n${res.data.result.ninja}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == '#help'){
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, help.help(id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
if (text == '#menu'){
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}

else if (text == '#donate'){
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#donasi'){
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#DONATE'){
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#DONASI'){
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '#info'){
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, A187, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) ,MessageType.text);
}
else if (text == '.foto'){
conn.sendMessage(id, 'kirim !foto cewek/cowok\n\nContoh: !foto cewek' ,MessageType.text);
}
else if (text == 'Fadhil'){
conn.sendMessage(id, ' *Iya Fadhil itu ownerku kak... Ada yang bisa dibantu? , Follow Instagram Mimin yah : https://instagram.com/nur.fdhl_*' ,MessageType.text);
}
else if (text == 'Clara'){
conn.sendMessage(id, ' *Iyaa Clara itu adeknya ownerku kak... Ada yang bisa dibantu?  , Follow Instagram adek Mimin Yah : https://instagram.com/clrayyy_*' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '.sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '.pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   }
 
   if (text.includes(".quotes2"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
_${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }

   
   if (text.includes(".loli"))
   {
    var items = ["anime loli","anime loli sange","anime loli fackgirll","anime loli i love you"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
    
if (text.includes(".pokemon"))
   {
    var items = ["anime pokemon"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

   else if (text.includes(".artinama")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!artinama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Arti dari nama *${nama}* adalah

❉──────────❉

         Nama _*${nama}*_ _${h}_
         
❉──────────❉

`,
 MessageType.text);
  });
  }
  else if (text.includes(".pasangan ")) {
    const request = require('request');
    var gh = text.split("!pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `

❉──────────❉

 *Kecocokan berdasarkan nama*


 _${d}_


❉──────────❉
    `, MessageType.text);
  });
  }
   if (text.includes(".foto cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes(".foto cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes(".fotoanime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
 
if (text.includes(".lirik")){
	const aris = text.replace(/.lirik /, "")
	axios.get(`https://arugaz.herokuapp.com/api/lirik?judul=${teks}`).then ((res) => {
	     conn.sendMessage(id, '[WAIT] Sedang Proses...', MessageType.text)
	 	let hasil = ` *🎧Lirik🎧 Lagu ${aris}:* \n\n\n _${res.data.result}_ `
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes(".alay")){
	const aris = text.replace(/.alay /, "")
	axios.get(`https://arugaz.herokuapp.com/api/bapakfont?kata=${teks}`).then ((res) =>
		{ let hasil = `${res.data.result}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}
 if (text.includes("?sim")){
const teks = text.replace(/?sim /, "")
axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
 if (text.includes('.profileig')){
  var teks = text.replace(/.profileig /, '')
    axios.get('https://arugaz.herokuapp.com/api/stalk?username='+teks)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
 else if (text == '.psnkosong'){
conn.sendMessage(id, '                       ' ,MessageType.text);
}
 
 
 
 
 
 
 
//Tolonglah bro jangan di ubah ubah FADHIL ID


})

