# REPLIT.js
Replit.js is an easy library for creating JavaScript [repl.it](https://repl.it/) bots. It uses graphQL and is class-based.

## Get Started
```js
// const Replit = require("replit.js");
// const bot = new Replit("username", "password");
// bot.checkPosts(["id", "id", "id"]);
// bot.checkFrequency(5000);
// bot.on("comment", data => {
//   if(data.message == "!test") bot.send(data.location, "Hello world!");
// });
const Replit = require("replbot");
const client = new Replit();
(async () => {
  // This should always be the first thing done!
  await client.login("myAwesomeBot", "password")
  bot.checkPosts([1234, 5678, 4839]);
  bot.checkFrequency(60000 * 5); // 5 minutes is good
  bot.on("comment", data => {
    if(data.message.body == "!test") {
      data.actions.reply(data.message.id, "Hello world!");
    }
  });
})()
```
