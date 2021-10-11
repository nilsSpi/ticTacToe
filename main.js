"use strict";

let fields=[];
let currentShape='cross';
let shapeShifter= function(shape){ 
    return currentShape= shape=='cross'? 'circle':'cross';
};

function fillShape(id){
   
   fields[id]=shapeShifter(currentShape);
   draw();
}

function draw(){
    fields.forEach((shape,index)=>shape=='circle'?
    document.getElementsByClassName(index)[0].classList.remove('d-none')
    :
    document.getElementsByClassName(index)[1].classList.remove('d-none')
    )
}

