// import { text } from "express";

document.body.onload = toDoApp; 
document.body.onload = addElement;
// document.body.onload = button;

let div = document.getElementById('div');
// div.style.cssText = 'display: flex; justify-content: center; align-items: center;border: 2px solid black'
function addElement(){
    const item = document.createElement('h1');
    // newDiv.style.cssText = 'color:red;'
    const content = document.createTextNode('ToDoApp');

    item.appendChild(content)

    // const div = document.getElementById('div');
    document.body.insertBefore(item, div);
    
    toDoApp()
}


function toDoApp(){
// List
    // const li = document.createElement('li')
    // document.body.insertBefore(li, div)
// Input
    const form = document.createElement('input')
    // let list =[] 
    // list.push(form.value)
    form.id = 'form'
    form.placeholder ='Add Item'

    document.body.insertBefore(form, div)
    
    let id = 0
    function showData(){
        var input = document.getElementById('form')
        console.log(input.value)
        // li.innerHTML += "/" + input.value
        id++
        div.innerHTML += `
        <div class='items'>
            <ul id='${id}'>
                <li class='list-item' id='child' >${input.value} </li>
            </ul>
        </div>
        `
    }
// Button
    const btn = document.createElement('button');
    btn.id = 'btn'
    btn.innerHTML = 'Add to do List'
    btn.onclick = () => {
        console.log('Fucking aye this is working')
        showData()
    }
    document.body.insertBefore( btn, div);
}
