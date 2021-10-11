"use strict";

let fields=[];
let currentShape='cross';

let checkRow1= array=>array[0]==array[1] && array[1]==array[2];
let checkRow2= array=>array[3]==array[4] && array[4]==array[5];
let checkRow3= array=>array[6]==array[7] && array[7]==array[8];
let checkCol1= array=>array[0]==array[3] && array[3]==array[6];
let checkCol2= array=>array[1]==array[4] && array[4]==array[7];
let checkCol3= array=>array[2]==array[5] && array[5]==array[8];
let checkLeftBotRightTop= array=>array[6]==array[4] && array[4]==array[2];
let checkLefttTopRightBot= array=>array[0]==array[4] && array[4]==array[8];


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

let checkRowWinCondition= function (){
   return checkRow1(fields) || checkRow2(fields) || checkRow3(fields);
}
let checkColWinCondition =function (){
    return checkCol1(fields) || checkCol2(fields) || checkCol3(fields);
 }
 let checkDiagWinCondition =function (){
    return checkLeftBotRightTop(fields) || checkLefttTopRightBot(fields);
 }


function checkWin(){
    return checkRowWinCondition()||checkColWinCondition()||checkDiagWinCondition();
}