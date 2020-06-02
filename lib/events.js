const query = require("./util/graphql");
module.exports = {
  /**
   * Reply to a thread.
   * @param {Number} id The ID of the thread
   * @param {String} message The message body
   */
  reply: async (id, message) => {
    return await query(`mutation {
      createComment(input: {
        body: "${message}", commentId: ${id}
      }) {
        comment { id }
      }
    }`)
  },
  
  /**
   * Create a new thread.
   * @param {Number} id The ID of the post
   * @param {String} message The message body
   */
  send: async (id, message) => {
    return await query(`mutation {
      createComment(input: {
        body: "${message}", postId: ${id}
      }) {
        comment { id }
      }
    }`)
  },

  /**
   * Delete a comment/thread.
   * @param {Number} id The ID of the comment
   */
  delete: async id => {
    return await query(`mutation {
      deleteComment(id: ${id}) {
        id
      }
    }`)
  },
  
  /**
   * Edit a comment/thread.
   * @param {Number} id The ID of the comment
   * @param {String} id The new message
   */
  edit: async (id, message) => {
    return await query(`mutation {
      updateComment(input: {
        id: ${id}, body: "${message}"
      }) {
        comment { id }
      }
    }`)
  }
};