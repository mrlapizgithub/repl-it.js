# REPLIT.js
Replit.js is an easy library for creating JavaScript [repl.it](https://repl.it/) bots. It uses graphQL and is class-based.

## Get Started
```js
const Replit = require("replit.js");
const bot = new Replit("username", "password");
bot.checkPosts(["id", "id", "id"]);
bot.checkFrequency(5000);
bot.on("comment", data => {
  if(data.message == "!test") bot.send(data.location, "Hello world!");
});
```