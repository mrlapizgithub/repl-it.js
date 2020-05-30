const fetch = require("node-fetch");
module.exports = async (username, password) => {
  return await fetch("https://repl.it/login", {
    method: "POST",
    body: {
      username,
      password,
      teacher: false
    },
    headers: {
      "X-Requested-With": "coder100",
      "Referer": "https://repl.it/login",
    }
  }).then(e => e.json()).then(console.log).then(res => {
    // console.log(res.headers.raw()['set-cookie']);
    return res.headers.raw()['set-cookie']
  });
};