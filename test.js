/* const { Bot: Replit } = require("./index");
const fs = require("fs");
const bot = new Replit();
// {"m":[]}
(async () => {
  let data = JSON.parse(fs.readFileSync("private", "utf8"));
  await bot.login(data.username, data.password)
  bot.checkPosts([39768]);
  bot.checkFrequency(1000);
  bot.on("message", data => {
    console.log(data.message);
  })
  bot.listen("index.json");
})() */
const { SimpleBot: Bot } = require("./index");
const fs = require("fs");
const bot = new Bot();
(async () => {
  let data = JSON.parse(fs.readFileSync("private", "utf8"));
  await bot.login(data.username, data.password);
  await bot.send(39768, "Hello world!")
})()