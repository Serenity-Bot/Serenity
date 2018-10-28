module.exports = (bot) => {
  //console.log(`SHARD: ${bot.shard.count} (${bot.shard.id})`);
  console.log(`GUILDS: ${bot.guilds.size} with ${bot.channels.size} channels.`);
}
