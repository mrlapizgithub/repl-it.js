const Replit = require("./index");
const fs = require("fs");
const bot = new Replit();
// {"m":[]}
(async () => {
  let data = JSON.parse(fs.readFileSync("private", "utf8"));
  await bot.login(data.username, data.password)
  bot.checkPosts([39768]);
  bot.checkFrequency(1000);
  bot.on("message", async data => {
    let output = await data.actions.reply(data.message.id, "Hello world! Your message was "+data.message.body);
    console.log(data.actions);
    console.log(data.message.id, "Hello world! Your message was "+data.message.body);
    console.log(output);
  })
  bot.listen("index.json");
})()