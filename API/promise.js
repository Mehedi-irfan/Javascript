//basic promise intilize
new Promise((resolve, reject)=> {
    setTimeout(()=>{
        console.log('Async task');
        resolve()
    }, 1000)
}).then(()=> {
    console.log("Promise consumed")
})

//taken value using resolve
new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve({userName : "Mehedi", email : 'mehediirfan99@gamil.com'})
    }, 1000)
}).then((user)=> {
    console.log(user);
})

//using promise with try catch and finaly
new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let error = true;
        if(!error){
            resolve({userName : "Mehedi", email : 'mehediirfan99@gamil.com'})
        }else{
            reject("ERROR : Something went wrong")
        }
    },1000)
}).then((user)=> {
    console.log(user);
    return user.userName;
}).then((userName)=> {
    console.log(userName);
}).catch((err)=> {
    console.log((err));
}).finally(()=> {
    console.log("The promises either resolved or rejected ");
})