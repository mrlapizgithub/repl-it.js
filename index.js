const { login, events, messageLog, query } = require("./lib/index");
class Bot {
  /**
   * Creates an instance of the bot
   */
  constructor() {
    // TODO: fabricate all possible events
    this.events = {};
    this.banned = [];
    this.frequency = 60000 * 5; // 5 Minutes
    this.posts = [];
  }

  /**
   * Get the bot authorization cookies. This should be the first thing done.
   * @param {String} username Username
   * @param {String} password Password
   */
  async login(username, password) {
    global.cookies = await login(username, password);
  }

  /**
   * Sets the posts to be checked
   * @param {Array} arr The posts to check
   */
  checkPosts(arr){
    this.posts = arr;
  }

  /**
   * Sets the frequency the post(s) should be checked
   * @param {Number} ms The frequency (milliseconds)
   * @returns The `setInterval` created.
   */
  checkFrequency(ms){
    this.frequency = ms;
  }

  /**
   * Adds a new listener for an event. `comment, message`
   * @param {String} event The event name
   * @param {Function} callback The callback function
   */
  on(event, callback){
    this.events[event] = callback;
  }

  /**
   * `USED INTERNALLY` Pass an event to be recieved with `on`
   * @param {String} event Event name
   * @param {Object} data Data passed to callback
   */
  async call(event, data){
    await this.events[event]({
      message: data,
      actions: events
    });
  }

  /**
   * Block the user from triggering any events
   * @param {Number} user The ID of the user
   */
  banUser(user){
    this.banned.push(user);
  }

  /**
   * Block multiple users
   * @param {Array} users An array of IDs
   */
  banUsers(users){
    this.banned.concat(users);
  }

  /**
   * Begin listening for messages at a specific file. This should be the last thing done.
   * @param {String} file File name to store message IDs
   */
  listen(file){
    messageLog(file, this.frequency, this.posts, this);
  }
}

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

module.exports = { Bot, SimpleBot };