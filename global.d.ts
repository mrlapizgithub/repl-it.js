declare class Bot {
  constructor();
  login(username: String, password: String): void;
  checkPosts(posts: String[]): void;
  checkFrequency(ms: Number): void;
  on(event: "message", callback: ((data: Object) => void)): void;
  call(event: "message", data: Object): void;
  banUser(user: Number): void;
  banUsers(users: Number[]): void;
  listen(file: String): void;
}

declare class SimpleBot {
  constructor();
  login(username: String, password: String): void;
  getPosts(id: Number, query?: String): void;
  send(id: Number, msg: String): void;
  reply(id: Number, msg: String): void;
  delete(id: Number): void;
  edit(id: Number, msg: String): void;
}