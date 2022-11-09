
function clock(){
    let clockOut = document.getElementById('clock')
    let btn = document.getElementById('btn')
    btn.style.top = '5rem'
    clockOut.style.opacity = '1.0'
    
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
        
    h =(h<10) ? '0' + h:h
    m =(m<10) ? '0' + m:m
    s =(s<10) ? '0' + s:s
    
    let time = h+":"+m+":"+s
    // console.log(time)
    clockOut.innerHTML = time
    setTimeout(clock, 1000)
}
