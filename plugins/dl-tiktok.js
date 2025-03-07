import axios from "axios";
import config from "../config.cjs";

const tiktok = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(" ")[0].toLowerCase() : "";
  const query = m.body.slice(prefix.length + cmd.length).trim();

  if (!["tiktok", "tt"].includes(cmd)) return;

  if (!query || !query.startsWith("http")) {
    return Matrix.sendMessage(m.from, { text: "❌ *Usage:* `.tiktok <TikTok URL>`" }, { quoted: m });
  }

  try {
    await Matrix.sendMessage(m.from, { react: { text: "⏳", key: m.key } });

    const { data } = await axios.get(`https://api.davidcyriltech.my.id/download/tiktok?url=${query}`);

    if (!data.success || !data.result || !data.result.video) {
      return Matrix.sendMessage(m.from, { text: "⚠️ *Failed to fetch TikTok video. Please try again.*" }, { quoted: m });
    }

    const { desc, author, statistics, video, music } = data.result;

    const caption = `*𝖣𝖠𝖱𝖪 𝖲𝖠𝖬𝖴𝖱𝖠𝖨 𝖳𝖨𝖪𝖳𝖮𝖪 𝖣𝖮𝖶𝖭𝖫𝖮𝖣 *\n\n💬 *${desc}*\n👤 *By:* ${author.nickname}\n❤️ *Likes:* ${statistics.likeCount}\n💬 *Comments:* ${statistics.commentCount}\n🔄 *Shares:* ${statistics.shareCount}\n\n> *ʀᴇɢᴀʀᴅs ʙᴇʀᴀ ᴛᴇᴄʜ*`;

    await Matrix.sendMessage(m.from, {
      video: { url: video },
      mimetype: "video/mp4",
      caption,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363299029326322@newsletter",
          newsletterName: "ᴅᴀʀᴋ sᴀᴍᴜʀᴀɪ",
          serverMessageId: 143,
        },
      },
    }, { quoted: m });

    await Matrix.sendMessage(m.from, { react: { text: "✅", key: m.key } });

    // Send the TikTok music separately
    await Matrix.sendMessage(m.from, {
      audio: { url: music },
      mimetype: "audio/mpeg",
      fileName: "TikTok_Audio.mp3",
      caption: "🎶 *TikTok Audio Downloaded*",
    }, { quoted: m });

  } catch (error) {
    console.error("TikTok Downloader Error:", error);
    Matrix.sendMessage(m.from, { text: "❌ *An error occurred while processing your request. Please try again later.*" }, { quoted: m });
  }
};

export default tiktok;
