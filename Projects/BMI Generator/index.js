const form = document.querySelector('form')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('Weight').value)
    const results = document.querySelector('.results')
    const p = document.createElement('p')


    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a Valid Height`
    } else if (weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a Valid Weight`
    } else{
        const bmi = (weight /((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>Your BMI is :- ${bmi}</span>`
        if(bmi <= 18.6){
            p.innerHTML = `You have under weight BMI`
            results.appendChild(p)
        } else if(bmi >=18.6 && bmi <=24.9){
            p.innerHTML = `You have Normal Range BMI`
            results.appendChild(p)
        } else if(bmi >= 24.9){
            p.innerHTML = `You have Over weight BMI`
            results.appendChild(p)
        }
    }
})