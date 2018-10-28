const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const Enmap = require("enmap");
const { TOKEN } = require('./assets/config.js');



fs.readdir("./assets/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./assets/events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
    delete require.cache[require.resolve(`./assets/events/${file}`)];
  });
});

bot.commands = new Enmap();

fs.readdir("./assets/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./assets/commands/${file}`);
    let cmdname = file.split(".")[0];
    console.log(`Loading: ${cmdname}`);
    bot.commands.set(cmdname, props);
  });
});

bot.login(TOKEN);
