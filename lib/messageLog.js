const query = require("./util/graphql");
const fs = require("fs");
module.exports = {
  startLog: (file, interval, posts, self) => {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, '{"m": []}');
    }
    return setInterval(() => {

    }, interval);
  }
};