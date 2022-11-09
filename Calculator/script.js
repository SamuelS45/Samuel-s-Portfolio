
let storage = []
let display = document.getElementById('output')
function calculate(props){
    display.value += props
    storage.push(props)
    console.log(storage)
    
    return display
}


function equal(){
    let join = storage.join('')
    if(join != ''){
        let result = (Function('return '+join)())
        display.value = storage.join('')
        display.value = result
        // storage.push(result)
        // storage.split(',')
    }
    console.log(join)
    console.log(result)
    
}

function c(){
    display.value = ''
    storage = []

}
function redo(){
    storage.pop()
    display.value = storage.join('')
    
}
function mod(){
    // storage.pop()
    // display.value = storage.join('')
}


console.log(14%4)
