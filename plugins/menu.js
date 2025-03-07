import config from '../config.cjs';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
import Jimp from 'jimp';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (3600 * 24));
  const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  const timeString = `${String(days).padStart(2, '0')}-${String(hours).padStart(2, '0')}-${String(minutes).padStart(2, '0')}-${String(seconds).padStart(2, '0')}`;
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (['menu', 'time', 'dj'].includes(cmd)) {
    const width = 800;
    const height = 500;
    const image = new Jimp(width, height, 'black');
    const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    const textMetrics = Jimp.measureText(font, timeString);
    const textHeight = Jimp.measureTextHeight(font, timeString, width);
    const x = (width / 2) - (textMetrics / 2);
    const y = (height / 2) - (textHeight / 2);
    image.print(font, x, y, timeString, width, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);
    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);
    
    const uptimeMessage = `╭───────────────━⊷
║ *D̸A̸R̸K̸ S̸A̸M̸U̸R̸A̸I̸ U̸P̸T̸I̸M̸E̸*
╰───────────────━⊷
╭───────────────━⊷
║- *${days} Day(s)*
║- *${hours} Hour(s)*
║- *${minutes} Minute(s)*
║- *${seconds} Second(s)*
╰───────────────━⊷
╭───────────────━⊷
║ sᴛᴀʀ ᴛʜᴇɴ ғᴏʀᴋ ᴍʏ ʀᴇᴘᴏ
║
╰───────────────━⊷`;
    
    const buttons = [
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "ᴍᴇɴᴜ",
          id: `${prefix}menu`
        })
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "ᴘɪɴɢ",
          id: `${prefix}ping`
        })
      }
    ];

{
                  "name": "single_select",
                  "buttonParamsJson": `{"title":"🔖𝚻𝚫𝚸 𝐅𝚯𝚪 𝚯𝚸𝚵𝚴 𝚳𝚵𝚴𝐔",
                 "sections":
                   [{
                    "title":"😎 𝛯𝑇𝛨𝛪𝛸-𝛭𝐷 𝛥𝐿𝐿𝛭𝛯𝛮𝑈",
                    "highlight_label":"🤩 𝛥𝐿𝐿𝛭𝛯𝛮𝑈",
                    "rows":[
                      {
                       "header":"",
                       "title":"🔰 ᴀʟʟ ᴍᴇɴᴜ",
                       "description":"🎨𝛯𝑇𝛨𝛪𝛸-𝛭𝐷 𝛥𝐿𝐿𝛭𝛯𝛮𝑈🎨",
                       "id":"View All Menu"
                      },
                      {
                        "header":"",
                        "title":"⬇️ ᴅᴏᴡɴʟᴀᴏᴅᴇʀ ᴍᴇɴᴜ",
                        "description":"📂𝐒𝚮𝚯𝐖 𝚫𝐋𝐋 𝐃𝚯𝐖𝚴𝐋𝚯𝚫𝐃 𝐅𝚵𝚫𝚻𝐔𝚪𝚵𝐒🗂",
                        "id":"Downloader Menu"
                      },
                      {
                        "header":"",
                        "title":"👨‍👨‍👧‍👧ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                        "description":"🥵𝐅𝚵𝚫𝚻𝐔𝚪𝚵 𝚻𝚮𝚫𝚻 𝚫𝚪𝚵 𝚯𝚴𝐋𝐘 𝚫𝛁𝚰𝐋𝚫𝚩𝐋𝚵 𝐅𝚯𝚪 𝐆𝚪𝚯𝐔𝚸🥵",
                        "id":"Group Menu"
                      },
                      {
                        "header":"",
                        "title":"👨‍🔧 ᴛᴏᴏʟ ᴍᴇɴᴜ",
                        "description":"🛠 𝐒𝚮𝚯𝐖 𝚳𝚵 𝚻𝚯𝚯𝐋 𝚳𝚵𝚴𝐔",
                        "id":"Tool Menu"
                      },
                      {
                        "header":"",
                        "title":"🗿 ᴍᴀɪɴ ᴍᴇɴᴜ",
                        "description":"📪 𝚩𝚯𝚻 𝚳𝚫𝚰𝚴 𝐂𝚯𝚳𝚳𝚫𝚴𝐃𝐒🗳",
                        "id":"Main Menu"
                      },
                     {
                        "header":"",
                        "title":"👨‍💻 ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                        "description":"😎𝐅𝚵𝚫𝚻𝐔𝚪𝚵 𝚻𝚮𝚫𝚻 𝚫𝚪𝚵 𝚯𝚴𝐋𝐘 𝐅𝚯𝚪 𝚳𝐘 𝚮𝚫𝚴𝐃𝐒𝚯𝚳𝚵 𝚯𝐖𝚴𝚵𝚪👨‍💼",
                        "id":"Owner Menu"
                      },
                      {
                        "header":"",
                        "title":"✨ ᴀɪ ᴍᴇɴᴜ",
                        "description":"💫 𝐒𝚮𝚯𝐖 𝚳𝚵 𝚫𝚰 𝚳𝚵𝚴𝐔 🎇",
                        "id":"Ai Menu"
                      },
                      {
                        "header":"",
                        "title":"🔍sᴇᴀʀᴄʜ ᴍᴇɴᴜ🔎",
                        "description":"♂️ 𝐒𝚮𝚯𝐖 𝚳𝚵 𝐒𝚵𝚫𝚪𝐂𝚮 𝚳𝚵𝚴𝐔",
                        "id":"Search Menu"
                      },
                      {
                        "header":"",
                        "title":"🧚‍♂️ sᴛᴀʟᴋ ᴍᴇɴᴜ",
                        "description":"👨‍💼 𝐒𝚮𝚯𝐖 𝚳𝚵 𝐒𝚻𝚫𝐋𝐊 𝚳𝚵𝚴𝐔🪆",
                        "id":"Stalk Menu"
                      },
                      {
                        "header":"",
                        "title":"🥏 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚛 𝚖𝚎𝚗𝚞",
                        "description":"🛷 𝐒𝚮𝚯𝐖 𝚳𝚵 𝐂𝚯𝚴𝛁𝚵𝚪𝚻𝚵𝚪 𝚳𝚵𝚴𝐔",
                        "id":"Converter Menu"
                      }
                    ]}
                  ]}`
                },
              ],
            }),
            contextInfo: {
                  quotedMessage: m.message,
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "View All Menu") {
        const str = `hey ${m.pushName} ${pushwish}
╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *ᴇᴛʜɪx-ᴍᴅ*
│📍 ᴠᴇʀꜱɪᴏɴ: 2.0.3
│👨‍💻 ᴏᴡɴᴇʀ : *ᴇᴛʜɪx xsɪᴅ*      
│👤 ɴᴜᴍʙᴇʀ: 919142294671
│💻 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${config.MODE}*
│💫 ᴘʀᴇғɪx: [${pref}]
╰─────────────━┈⊷ 
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙰𝚃𝚃𝙿
┃✰ ${prefix}𝙰𝚃𝚃𝙿2
┃✰ ${prefix}𝙰𝚃𝚃𝙿3
┃✰ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃✰ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃✰ ${prefix}𝙰𝚒
┃✰ ${prefix}𝙱𝚞𝚐
┃✰ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃✰ ${prefix}𝙶𝚙𝚝
┃✰ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃✰ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃✰ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚃𝙾𝙾𝙻 ❯━╮
┃✰ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃✰ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃✰ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃✰ ${prefix}𝚃𝚛𝚝
┃✰ ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃✰ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃✰ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃✰ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃✰ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃✰ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃✰ ${prefix}𝙰𝚍𝚍
┃✰ ${prefix}𝙺𝚒𝚌𝚔
┃✰ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃✰ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃✰ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃✰ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃✰ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃✰ ${prefix}𝙰𝚙𝚔
┃✰ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃✰ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃✰ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃✰ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃✰ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃✰ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃✰ ${prefix}𝚈𝚝𝚖𝚙3
┃✰ ${prefix}𝚈𝚝𝚖𝚙4
┃✰ ${prefix}𝙿𝚕𝚊𝚢
┃✰ ${prefix}𝚂𝚘𝚗𝚐
┃✰ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃✰ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃✰ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃✰ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 ❯━╮
┃✰ ${prefix}𝙿𝚕𝚊𝚢
┃✰ ${prefix}𝚈𝚝𝚜
┃✰ ${prefix}𝙸𝚖𝚍𝚋
┃✰ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃✰ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃✰ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃✰ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃✰ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃✰ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃✰ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃✰ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃✰ ${prefix}𝙿𝚒𝚗𝚐
┃✰ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃✰ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃✰ ${prefix}𝙼𝚎𝚗𝚞
┃✰ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙹𝚘𝚒𝚗
┃✰ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃✰ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃✰ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃✰ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃✰ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃✰ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃✰ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃✰ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃✰ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃✰ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝚃𝙰𝙻𝙺 ❯━╮
┃✰ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃✰ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃✰ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `Ethix-MD`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'Ethix-MD'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: { 
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
   if ( selectedId == "Downloader Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃✰ ${prefix}𝙰𝚙𝚔
┃✰ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃✰ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃✰ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃✰ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃✰ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃✰ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃✰ ${prefix}𝚈𝚝𝚖𝚙3
┃✰ ${prefix}𝚈𝚝𝚖𝚙4
┃✰ ${prefix}𝙿𝚕𝚊𝚢
┃✰ ${prefix}𝚂𝚘𝚗𝚐
┃✰ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃✰ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃✰ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃✰ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if ( selectedId == "Group Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃✰ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃✰ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃✰ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃✰ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃✰ ${prefix}𝙰𝚍𝚍
┃✰ ${prefix}𝙺𝚒𝚌𝚔
┃✰ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃✰ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃✰ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃✰ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃✰ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Main Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃✰ ${prefix}𝙿𝚒𝚗𝚐
┃✰ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃✰ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃✰ ${prefix}𝙼𝚎𝚗𝚞
┃✰ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Owner Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙹𝚘𝚒𝚗
┃✰ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃✰ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃✰ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃✰ ${prefix}𝙱𝚌𝚐𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝙱𝚌𝚊𝚕𝚕
┃✰ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃✰ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃✰ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃✰ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃✰ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃✰ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃✰ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Search Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 ❯━╮
┃✰ ${prefix}𝙿𝚕𝚊𝚢
┃✰ ${prefix}𝚈𝚝𝚜
┃✰ ${prefix}𝙸𝚖𝚍𝚋
┃✰ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃✰ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃✰ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃✰ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃✰ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃✰ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃✰ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃✰ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   if (selectedId == "Stalk Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝚂𝚃𝙰𝙻𝙺 ❯━╮
┃✰ ${prefix}𝙽𝚘𝚠𝚊
┃✰ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃✰ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃✰ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Tool Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝚃𝙾𝙾𝙻 ❯━╮
┃✰ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃✰ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃✰ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃✰ ${prefix}𝙸𝚗𝚏𝚘
┃✰ ${prefix}𝚃𝚛𝚝
┃✰ ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Ai Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙰𝙸 ❯━╮
┃✰ ${prefix}𝙰𝚒
┃✰ ${prefix}𝙱𝚞𝚐
┃✰ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃✰ ${prefix}𝙶𝚙𝚝
┃✰ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃✰ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃✰ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Converter Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙰𝚃𝚃𝙿
┃✰ ${prefix}𝙰𝚃𝚃𝙿2
┃✰ ${prefix}𝙰𝚃𝚃𝙿3
┃✰ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃✰ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "Ethix-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default test;
    const msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: uptimeMessage
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "ᴍᴀᴅᴇ ʙʏ ᴄʀᴇᴡ sʟᴀʏᴇʀ"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({ image: buffer }, { upload: Matrix.waUploadToServer })),
              title: `ᴍᴀʀɪsᴇʟ`,
              gifPlayback: false,
              subtitle: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons
            }),
            contextInfo: {
              quotedMessage: m.message,
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '120363299029326322@newsletter',
                newsletterName: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
                serverMessageId: 1
              }
            }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
};

export default alive;
