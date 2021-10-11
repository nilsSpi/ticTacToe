"use strict";
// fields is vector of all moves made
let fields=[];
let currentShape='cross';
//break criteria
let gameOver=false;



// variables given an array check if initializer exists and if 3-in-row/col/diag is true
let checkRow1= array=>array[0]==array[1] && array[1]==array[2] && array[0];
let checkRow2= array=>array[3]==array[4] && array[4]==array[5] && array[3];
let checkRow3= array=>array[6]==array[7] && array[7]==array[8] && array[6];
let checkCol1= array=>array[0]==array[3] && array[3]==array[6] && array[0];
let checkCol2= array=>array[1]==array[4] && array[4]==array[7] && array[1];
let checkCol3= array=>array[2]==array[5] && array[5]==array[8] && array[2];
let checkLeftBotRightTop= array=>array[6]==array[4] && array[4]==array[2] && array[6];
let checkLefttTopRightBot= array=>array[0]==array[4] && array[4]==array[8] && array[0];



// shapeShipter calls the next player
let shapeShifter= function(shape){ 
    return currentShape= shape=='cross'? 'circle':'cross';
};


// fillShape renders a game square , which is clickd on

function fillShape(id){
if(!fields[id] && !gameOver){
    //inactivates player of previous move
    inacPlayer(currentShape);
    //next click on square will make it a move of not inactive player
   fields[id]=shapeShifter(currentShape);
   draw();
   //checking winning condition
   if (checkWin()){animateBar(fields);gameOver=true;}
}
}

// i check for every entry in fields if its a cricle. if true ill remove d-none from circle in the table

function draw(){
    fields.forEach((shape,index)=>shape=='circle'?
    document.getElementsByClassName(index)[0].classList.remove('d-none')
    :
    document.getElementsByClassName(index)[1].classList.remove('d-none')
    )
}


//conditon checker using the inbefore created variables and piping them
let checkRowWinCondition= function (){
   return checkRow1(fields) || checkRow2(fields) || checkRow3(fields);
}
let checkColWinCondition =function (){
    return checkCol1(fields) || checkCol2(fields) || checkCol3(fields);
 }
 let checkDiagWinCondition =function (){
    return checkLeftBotRightTop(fields) || checkLefttTopRightBot(fields);
 }

//win criteria definiton, returns true if and only if 3-in-row/col/diag was achieved
function checkWin(){
    return checkRowWinCondition()||checkColWinCondition()||checkDiagWinCondition();
}


//just checks wich win-criteria was met and returns the winner: 'circle' || 'cross'
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


// inactivates player which had the last move
function inacPlayer(currentShape){
if(currentShape=='circle'){document.getElementById('player-1').classList.remove('player-inactive');
document.getElementById('player-2').classList.add('player-inactive')}
else {
    document.getElementById('player-2').classList.remove('player-inactive');
    document.getElementById('player-1').classList.add('player-inactive');
}
}


// its the very same evalWinner() function but it returns the scaling to the winn-condition-bars
function animateBar(array){
    if( checkRow1(array)){document.getElementById('row1').style.transform='scaleX(1)';}
    else if(checkRow2(array)){document.getElementById('row2').style.transform='scaleX(1)';}
    else if(checkRow3(array)){document.getElementById('row3').style.transform='scaleX(1)';}
    else if(checkCol1(array)){document.getElementById('col1').style.transform='scaleX(1) rotate(90deg)';}
    else if(checkCol2(array)){document.getElementById('col2').style.transform='scaleX(1) rotate(90deg)';}
    else if(checkCol3(array)){document.getElementById('col3').style.transform='scaleX(1) rotate(90deg)';}
    else if(checkLeftBotRightTop(array)){document.getElementById('col2').style.transform='scaleX(1) rotate(-45deg)';}
    else if(checkLefttTopRightBot(array)){document.getElementById('col2').style.transform='scaleX(1) rotate(45deg)';}
}