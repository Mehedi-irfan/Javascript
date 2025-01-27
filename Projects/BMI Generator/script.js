const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('Weight').value)
    const results = document.querySelector('.results');
    let p = document.createElement('p')

    if(height == " " || height <0 || isNaN(height)){
       results.innerHTML = `<h3>Please Provide Valid Value</h3>`
    } else if(weight == " " || weight <0 || isNaN(weight)){
       results.innerHTML = `<h3>Please Provide Valid Value</h3>`
    }else{
        const bmi = (weight /((height*height)/10000)).toFixed(2)
        results.innerHTML = `Your BMI is :- ${bmi}`
        if(bmi < 18.6){
            p.innerHTML = `You are Under Weight`
            results.appendChild(p)
        } else if(bmi >= 18.6 && bmi <= 24.9){
            p.innerHTML = `You are Normal Range`
            results.appendChild(p)
        } else if(bmi >= 24.9){
            p.innerHTML = `You are Over Weight`
            results.appendChild(p)
        } 
    }
})