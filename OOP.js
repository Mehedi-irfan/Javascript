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
