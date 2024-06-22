document.addEventListener('DOMContentLoaded', (event) => {

    // declare let
    let mouseOver = false;
    
    // created a parent div
    var parentDiv = document.getElementById('tab1')
    
    // create a new html tag which unordered list
    const newElement1 = document.createElement('div')
    
    //  run a for loop where i is your incremental
    for (var i = 0; i<=10; i = i+1){
        const newElement1a = document.createElement('div');
        newElement1a.classList.add('box3');
        newElement1a.id = `div_id-${i}`;
        newElement1a.innerText = `ID: ${i}`
        newElement1.append(newElement1a)
    }
    
    // append it to parent div
    parentDiv.append(newElement1)
    
    newElement1.querySelectorAll('.box3').forEach(item => {
        item.addEventListener( 'mouseover', function(event){
            mouseOver = true
            event.target.style.backgroundColor = 'lightblue';
            event.target.style.cursor = "not-allowed";
        });

        item.addEventListener( 'mouseout', function(event){
            event.target.style.backgroundColor = '';
        });
    });
})