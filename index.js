const { login } = require("./lib/index");
class Bot {
  /**
   * Creates a new bot client.
   * @param {String} username Username
   * @param {String} password Password
   */
  constructor(username, password) {
    this.cookies = login(username, password);
    this.events = {};
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
  call(event, data){
    this.events[event](data);
  }
}
module.exports = Bot;