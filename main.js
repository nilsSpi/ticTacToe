"use strict";

let fields=[];
let currentShape='cross';

let checkRow1= array=>array[0]==array[1] && array[1]==array[2] && array[0];
let checkRow2= array=>array[3]==array[4] && array[4]==array[5] && array[3];
let checkRow3= array=>array[6]==array[7] && array[7]==array[8] && array[6];
let checkCol1= array=>array[0]==array[3] && array[3]==array[6] && array[0];
let checkCol2= array=>array[1]==array[4] && array[4]==array[7] && array[1];
let checkCol3= array=>array[2]==array[5] && array[5]==array[8] && array[2];
let checkLeftBotRightTop= array=>array[6]==array[4] && array[4]==array[2] && array[6];
let checkLefttTopRightBot= array=>array[0]==array[4] && array[4]==array[8] && array[0];


let shapeShifter= function(shape){ 
    return currentShape= shape=='cross'? 'circle':'cross';
};

function fillShape(id){
if(!fields[id]){

    inacPlayer(currentShape);
   fields[id]=shapeShifter(currentShape);
   draw();
   if (checkWin()){console.log(evalWinner(fields))}
}
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

function evalWinner(array){
    if( checkRow1(array)){return array[0]}
    else if(checkRow2(array)){return array[3]}
    else if(checkRow3(array)){return array[6]}
    else if(checkCol1(array)){return array[0]}
    else if(checkCol2(array)){return array[1]}
    else if(checkCol3(array)){return array[2]}
    else if(checkLeftBotRightTop(array)){return array[4]}
    else if(checkLefttTopRightBot(array)){return array[4]}
}

function inacPlayer(currentShape){
if(currentShape=='circle'){document.getElementById('player-1').classList.remove('player-inactive');
document.getElementById('player-2').classList.add('player-inactive')}
else {
    document.getElementById('player-2').classList.remove('player-inactive');
    document.getElementById('player-1').classList.add('player-inactive');
}
}