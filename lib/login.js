const fetch = require("node-fetch");
const headers = require("./util/headers");
module.exports = async (username, password) => {
  return await fetch("https://repl.it/login", {
    method: "POST",
    headers,
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(res => {
    // Get the sid cookie
    let sid = res.headers.raw()["set-cookie"][1]
    return sid
  })
};