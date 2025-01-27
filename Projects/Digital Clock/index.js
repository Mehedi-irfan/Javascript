const clockBtn = document.querySelector('.clock');


setInterval(()=>{
    const time = new Date();
    clockBtn.innerHTML = `${time.toLocaleTimeString()}`
}, 1000)