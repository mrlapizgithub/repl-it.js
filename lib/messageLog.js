const query = require("./util/graphql");
const fs = require("fs");
module.exports = async (file, interval, posts, self) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '{"m": []}');
  }
  // postdata stores all recorded posts.
  let postdata = JSON.parse(fs.readFileSync(file, 'utf8')).m;
  return setInterval(async () => {
    for (const id of posts) {
      // Set the frequency to 5 seconds for popular bots.
      let data = (await query(`query {
          post(id: ${id}) {
            recentComments {
              body, id, user {
                id
              }
            }
          }
        }`)).post.recentComments;
      // There are 3 recent comments.
      data.forEach(comment => {
        // Check for banned user
        if (self.banned.includes(comment.user.id)) return;
        // Check if comment has already been triggered
        if (!postdata.includes(comment.id)) {
          // Call event (Added post ID for easy access)
          self.call("message", Object.assign(comment, { postId: id }));
          // Record that comment has been triggered
          postdata.push(comment.id);
        }
      });
      // WARNING: This will take a lot of memory if very frequent!
      fs.writeFileSync(file, JSON.stringify({m: postdata}));
    }
  }, interval);
};