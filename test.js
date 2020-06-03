const { SimpleBot: Bot } = require("./index");
const fs = require("fs");
const bot = new Bot();
(async () => {
  let data = JSON.parse(fs.readFileSync("private", "utf8"));
  let out = await bot.getPosts(39768);
  await bot.login(data.username, data.password);
  await bot.send(39768, "Hello world!")
})()