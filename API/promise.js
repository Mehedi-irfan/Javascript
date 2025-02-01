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
    console.table(user);
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
    console.table(user);
    return user.userName;
}).then((userName)=> {
    console.log(userName);
}).catch((err)=> {
    console.log((err));
}).finally(()=> {
    console.log("The promises either resolved or rejected ");
})

async function promisees (){
 try{
    let url = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await url.json();
    console.log(data);
 }catch{
    console.log("e :", error);
 }finally{
    console.log("don't fetching");
 }
}
promisees()

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=> {
    return response.json()
}).then((data)=> {
    console.log(data);
}).catch((error)=> {
    console.log(error);
})