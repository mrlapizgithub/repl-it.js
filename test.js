const Replit = require("./index");

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("private", "utf8"));

const client = new Replit(data.username, data.password);
