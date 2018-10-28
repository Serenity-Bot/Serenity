const { PREFIX } = require('../config.js');

module.exports = (bot, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(PREFIX) !== 0) return;
   
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = bot.commands.get(command);
    if (!cmd) return;

    cmd.run(bot, message, args);
  };
