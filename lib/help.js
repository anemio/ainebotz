exports.help = (id, AINE, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
✿━━━━━━━━━━━━━✿

  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
  
✿━━━━━━━━━━━━━✿

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───

╔════════════════════
║ *MENU BOT ${AINE}*
╠════════════════════
║│1. _*#menu*_
║│5. _*#info*_
║│5. _*#donasi*_
║│7. _*#creator*_
╠════════════════════
║ _*POWERED BY AINEBOT*_
╚════════════════════`
}
