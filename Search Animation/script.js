

function search(){
    let input = document.getElementById('input').value
    let item = document.getElementsByClassName('item')
    if(input == ''){
        for(i = 0; i <= item.length-1; i++)
        // Without Animation

        // item[i].style.display = '';

        // With Animation
        // item[i].classList = 'item';

        item[i].style.transform = 'scale(1.0)'

        return console.log('nothing was entered')
    }else{
    console.log('Where is the sorting')
    function sort(){

        let filter = input.toUpperCase()
        // let items = document.getElementById('items')
        console.log('Sarch Function')
        // isn't surpose to be length of filter not length of item, what if items ran out?
        for(i = 0 ;i <= item.length -1 ;i++){
            
            let txtValue = item[i].innerContent || item[i].innerText;
            // One way of doing it without animation

            // filter === txtValue.toUpperCase()? 
            // item[i].style.display = ''
            // : item[i].style.display = 'none' 
            
            // with Animation
            
            // filter === txtValue.toUpperCase()? item[i].classList = 'item':item[i].classList = 'gone' 
            
            txtValue.toUpperCase().indexOf(filter)>-1? 
            item[i].style.transform = 'scale(1.0)'
            : item[i].style.transform = 'scale(0.0)' 
            
            // console.log (txtValue);
            console.log(i)
        }
        
    }
}
sort()
}