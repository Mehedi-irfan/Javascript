class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`this is user name :- ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const my = new User("mehedi");
my.logMe();
// console.log(my.createId());

class irfan extends User {
  constructor(email) {
    super(username);
    this.email = email;
  }
}
const iphone = new irfan("irfan@gamil.com");
// console.log(iphone.createId());
