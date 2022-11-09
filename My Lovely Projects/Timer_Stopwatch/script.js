let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

let minute = document.getElementById('minute')
let second = document.getElementById('second')
// second.innerHTML = '00'
// minute.innerHTML = '00'
let sec = 00
let min = 00
function timer(){
    sec++
    sec = (sec<10)?'0'+sec:sec
    if(sec>59){sec = 00}
    second.innerHTML = sec
    console.log(sec)
    if(sec>=59){
        // console.log('helo World')
        min++
        min = (min<10)?'0'+min:min
            minute.innerHTML = min
        }

}

// var toggle = null
// function startStop(){
//     if(toggle){
//         clearInterval(interval)
//         toggle = null
//         console.log('Stop')
//         console.log(toggle)
//     }else{
//         // toggle++
//         toggle = null
//         console.log('start')
//         // console.log(toggle)
//         interval = setInterval(timer, 1000)
//     }
// }
function startBtn(){
    console.log('start')
    interval = setInterval(timer, 1000)
    start.disabled = true 
}    
function stopBtn(){
    clearInterval(interval)
    console.log('Stop')
    start.disabled = false
}


function resetBtn(){
    clearInterval(interval)
    minute.innerHTML ='00'
    second.innerHTML ='00'
    sec = 00
    min = 00
    start.disabled = false

}

