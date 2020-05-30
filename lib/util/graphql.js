module.exports = async query => {
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "X-Requested-With": "any",
    "Referrer": "https://repl.it",
    "Origin": "https://repl.it"
  };
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
    return console.error("Error:", e_1);
  }
}