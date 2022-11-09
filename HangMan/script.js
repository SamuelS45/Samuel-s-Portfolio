let index = 0;

// let btn =document.getElementById('btn')



function hangMan(){
    let words = ['poppy','love','fuck','not', 'hell','hello', 'lovely']
    let splitWord = []
    splitWord = words[index].split()
    console.log(splitWord)
    
    var splitLetter = []
    splitLetter = splitWord[0].split('')
    console.log(splitLetter)
    console.log('Function Working')
    for(i = 0; i<splitLetter.length;i++){
        // let container = document.getElementById('container')
        // CREATE ELEMENT WAY
        // const h1 = document.createElement('h1')
        // h1.className = 'letter'
        // h1.id = `${splitLetter[i]}`
        // h1.style.display = 'none'
        
        // let txt = document.createTextNode('')
        // txt.textContent = `${splitLetter[i]}`
        // h1.appendChild(txt)
        // document.body.insertBefore(h1, container)
        var key = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',  'aa','bb','cc','dd','ee','ff','gg','hh','ii','jj','kk','ll','mm','nn','oo','pp','qq','rr','ss','tt','uu','vv','ww','xx','yy','zz',]
        
        container.innerHTML +=`
        <div class='letter-box'>
        <h1  id='${key[i]}' class='letter'>.</h1>
        </div>
        `
        console.log('Loop Working')
        
    }
    // let winner = document.getElementById('won')
    onkeydown = function(e){
        let k = e.key
        console.log(e);
        console.log('keydown Working');
        for(i = 0; i<splitLetter.length;i++){
            if(k ===splitLetter[i]){
            }
            // WORD HOLDERs _ _ _ _
            var letter = document.getElementById(`${key[i]}`)
            // console.log(letter.id)
            if(letter.id === key[i]){
                k===splitLetter[i]? letter.textContent = k: console.log('')
                k===splitLetter[i]? letter.style.opacity= '1.0': console.log('')
            }else{
                
            }
        };
    }
}
function nextWord(words){
    // if(index>words.length){
        // }
        index++
        console.log('Next Word')
        console.log(index)
        let container = document.getElementById('container')
        
        container.style.opacity = '0.0'
        container.innerHTML =''
        setTimeout(()=>container.style.opacity = '1.0', 1000)
        
    hangMan(index)
    // console.log(words.length)
}

window.onload = hangMan
