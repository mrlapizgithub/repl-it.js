const Replit = require("./index");
const fs = require("fs");
const client = new Replit();
(async () => {
  let data = JSON.parse(fs.readFileSync("private", "utf8"));
  await client.login(data.username, data.password)
  
})()