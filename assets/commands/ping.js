exports.run = (bot, message, args) => {
    message.channel.send(`DISCORD API RESPONSE: \`${bot.ping}\`ms`).catch(console.error);
}

exports.config = {
    "name": "ping",
    "alias": ["pong", "lag"],
    "description": "Used to check the latency for the discord api.",
}
