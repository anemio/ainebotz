exports.donate = (id, AINE, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
 *TERIMAKASIH SUDAH DONASI... SEMOGA REJEKINYA MAKIN BANYAK, SEMAKIN LANCAR, POKOKNYA TERIMAKASIH YA CUY...*        
╔════════════════════
║ *DONASI KE ${AINE}*
╠════════════════════
║╭──❉ *DONASI YUK* ❉──
║│➸ *PULSA*: _0895330379186/088289186649_
║│➸ *KUOTA*: _3/SMART_
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

