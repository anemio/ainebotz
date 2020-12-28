exports.info = (id, AINE, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
*SEMENTARA INFO SINGKAT DULU!!*         
╔════════════════════
║ *About ${AINE}*
╠════════════════════
║   *⚠️WARNING⚠️*
╠════════════════════
╠════════════════════
║ *DIPROGRAM MENGGUNAKAN*
║  *NODE.JS*
╠════════════════════
║╭──❉ *INFO* ❉─────────
║│➸ *AUTHOR*: _Muhammad Ridwan Reynaldy_
║│➸ *DESIGNER*: _Muhammad Ridwan Reynaldy_
║│➸ *YOUTUBE*: _Muhammad Ridwan Reynaldy_
║╰───────────────────
╠════════════════════
║  *${AINE}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│➸ *Group WhatsApp*
║│ _${groupwhatsapp}_
║│➸ *YouTube <subscribe>*
║│ _${youtube}_
║│➸ *Instagram <Follow>*
║│ _${instagram}_
║│➸ *Creator ${AINE}*
║│ _${nomer}_
║╰───────────────────
╠════════════════════
║ _*POWERED BY AINEBOT*_
╚════════════════════`
}
