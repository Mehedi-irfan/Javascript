class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username - ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course is added by ${this.username}`);
  }
}

const course = new Teacher("Mehedi", "mehedi@gamil.com", 1243);
course.addCourse();
