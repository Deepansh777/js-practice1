// created a parent div
var parentDiv = document.getElementById('tab1')

// create a new html tag which unordered list
const newElement1 = document.createElement('div')

//  run a for loop where i is your incremental
for (var i = 0; i<=10; i = i+1){
    const newElement1a = document.createElement('div');
    newElement1a.classList.add('box3')
    newElement1a.innerText = `ID: ${i}`
    newElement1.append(newElement1a)
}

// append it to parent div
parentDiv.append(newElement1)
