const fetch = require("node-fetch");

module.exports = async query => {
  const headers = require("./headers");
  headers.Cookie = global.cookies;
  try {
    const e = await fetch("https://repl.it/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({
        query
      })
    });
    return (await e.json()).data;
  }
  catch (e_1) {
    return console.error("Replbot error:", e_1);
  }
}