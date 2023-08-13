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

function gameInt() {
    currentPlayer="X";
    gameGrid=['','','','','','','','',''];
    // lets empty all the places
    boxes.forEach((box,index)=>
    {
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        //initialize each the box with initial css properties
        box.classList=`box box${index+1}`
           
    })
    button.classList.remove("active");
    gameInfo.innerHTML=`CURRENT-PLAYER : ${currentPlayer}`;
     
     
}
gameInt();


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

button.addEventListener("click",gameInt)
//predictig the winner
function checkGameOver()
{
    let answer ="";
  winningPosition.forEach((position)=>
  {
    if((gameGrid[position[0]]!==""||gameGrid[position[1]]!==""||gameGrid[position[2]]!=="")&&(gameGrid[position[0]]===gameGrid[position[1]]&&gameGrid[position[1]]===gameGrid[position[2]]))
    {
        //CHECK IF X OR O IS THE WINNER
        if(gameGrid[position[0]]==="X")
        {
            answer="X"
        }
        else
             {answer="O"}
        boxes.forEach((box)=>{
            box.style.pointerEvents="none";
        })   
       
        //NOW WE KNOW EITHER X OR ETHER O IS WINNER SO GREEN THE SCREEN
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");    
    }
    if(answer!=="")
    {
       gameInfo.innerText=(`Winner Is : ${answer}`) 
       button.classList.add("active");
    }
  })
  let fillCount=0;
  gameGrid.forEach((box)=>{
    if(box!=="")
    {
    fillCount++;
    }
  })
  if(fillCount==9)
  {
    gameInfo.innerText=(`GAME-TIED`);
    button.classList.add("active");
  }

}

