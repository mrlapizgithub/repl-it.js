const { login, events, query } = require("../lib/index");

class SimpleBot {
  
  /**
   * Creates a more basic version of the Bot client.
   */
  constructor() {
    this.cookies;
  }

  /**
   * Logs in the bot.
   * @param {String} username Username
   * @param {String} password Password
   */
  async login(username, password){
    global.cookies = await login(username, password);
    this.cookies = global.cookies;
  }

  /**
   * Gets a post by ID. The rest is up to you.
   * @param {Number} id Post ID
   * @param {String} q Query
   */
  async getPosts(id, q=`recentComments {
    body, id, user {
      id
    }
  }`) {
    return await query(`query {
      post(id: ${id}) {
        ${q}
      }
    }`);
  }

  /**
   * Sends a message.
   * @param {Number} id Post ID
   * @param {String} msg Body of the message
   */
  async send(id, msg) {
    return await events.send(id, msg);
  }

  /**
   * Sends a comment.
   * @param {Number} id Comment ID
   * @param {String} msg Body of the message
   */
  async reply(id, msg) {
    return await events.reply(id, msg)
  }

  /**
   * Deletes a comment/message
   * @param {Number} id Comment/Message ID
   */
  async delete(id) {
    return await events.delete(id)
  }

  /**
   * Edits a comment/message
   * @param {Number} id Comment/Message ID
   * @param {String} msg Message body
   */
  async edit(id, msg) {
    return await events.edit(id, msg)
  }

}

module.exports = SimpleBot;