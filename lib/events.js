const query = require("./util/graphql");
module.exports = {
  // reply creates a subcomment
  reply: async (id, message) => {
    return await query(`mutation {
      createComment(input: {
        body: ${message}
        commentId: ${id}
      }) {
        comment {
          id
        }
      }
    }`)
  },
  // send creates a comment
  send: async (id, message) => {
    return await query(`mutation {
      createComment(input: {
        body: ${message}
        postId: ${id}
      }) {
        comment {
          id
        }
      }
    }`)
  },
  delete: async id => {},
  edit: async (id, message) => {},

  // Is this a good idea?
  upVote: async id => {},
  unVote: async id => {},
};