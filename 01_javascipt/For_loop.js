for(let i = 1; i <=  10; i++){
    // console.log(`Multiply with ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

const myArray = ["mehedi", "hasan", "irfan"]
for(let i = 0; i < myArray.length; i ++){
    console.log(myArray[i]);
    
}

//break 
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    console.log(i);
}

//continue
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip iteration when i equals 2
    }
    console.log(i);
}