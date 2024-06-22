// to add comments press ctrl+?
//  to use a new variable in js, you need to first declare it
//  call existing parent div (i.e. tab1)
var parentDiv = document.getElementById('tab1')

// create a new h1 element
const para = document.createElement("h1"); // p -> paragraph html tag

//  assign a value to this new para element
para.innerText = "This is a paragraph";

// add the value to the existing parent div (which is tab 1)
parentDiv.append(para);