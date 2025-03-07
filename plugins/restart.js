import config from '../config.cjs';

const restartBot = async (m) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === 'restart') {
    try {
      m.reply('D̸A̸R̸K̸ S̸A̸M̸U̸R̸A̸I̸ I̸S̸ R̸E̸S̸T̸A̸R̸T̸I̸N̸G̸ P̸L̸S̸ W̸A̸I̸T̸....')
     await process.exit()
    } catch (error) {
      console.error(error);
      await m.React("❌");
      return m.reply(`An error occurred while restarting the bot: ${error.message}`);
    }
  }
};

export default restartBot;
