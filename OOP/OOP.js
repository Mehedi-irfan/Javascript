const user = {
    username : "mehedi", 
    age : 24,
    profession : 'student',

    getTheUserValue : function(){
        console.log(`username :-${this.username}`);
    }
}
console.log(user.username);
console.log(user.getTheUserValue());


//construactor function
function User(userName, isLogedIn, logInCount){
    this.username = userName,
    this.islogedin = isLogedIn,
    this.logincount = logInCount;

    this.greeting = function(){
        console.log(`userName :- ${this.username}`);
        
    }
    return this;
}

//call this constructor using new keyword cz new keyword make new instance this new keyword never overright original function
const userOne = new User('hasan', 12, true)
const userTwo = new User('irfan', 502, false)
console.log(userOne);
console.log(userTwo);

//when you use new keyword it's make a empty {} object it's called instance