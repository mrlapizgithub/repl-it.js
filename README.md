# REPLIT.js
Replit.js is an easy library for creating JavaScript [repl.it](https://repl.it/) bots. It uses graphQL and is class-based.

## Get Started
```js
// Load the comprehensive version.
const { Bot: Replit } = require("replbot");
const bot = new Replit();
(async () => {
  // This should always be the first thing done!
  await bot.login("myAwesomeBot", "password")
  bot.checkPosts([1234, 5678, 4839]);
  bot.checkFrequency(60000 * 5); // 5 minutes is good
  bot.on("comment", data => {
    if(data.message.body == "!test") {
      data.actions.reply(data.message.id, "Hello world!");
    }
  });
  // This should always be the last thing done!
  bot.listen("index.json");
})()
```

[Basic Docs](https://Replbot-NPM-PACKAGE-documentation.coder100.repl.co)