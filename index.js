const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".title");
const button=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0.,4,8],
    [2,4,6]
]

function calculateWinner() {
    currentPlayer="X";
    gameGrid=['','','','','','','','',''];
    button.classList.remove("active");
    gameInfo.innerHTML=`CURRENT-PLAYER : ${currentPlayer}`;
}
calculateWinner();


boxes.forEach((para,index)=>{
    para.addEventListener("click",()=>onclickHandle(index))
})

function onclickHandle(index)
 {
    if(gameGrid[index]==="")
    {
        boxes[index].innerHTML=currentPlayer;   
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        //changing tha players
        swapTurn();
        //calculating the winner
        checkGameOver();
    }
}

//changing the players
function swapTurn()
{
    if(currentPlayer==="X")
    {
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
    gameInfo.innerHTML=`CURRENT-PLAYER : ${currentPlayer}`;
}

//predictig the winner
function checkGameOver()
{
    
}