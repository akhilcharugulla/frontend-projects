var currentplayer="X"
var keypressarr=document.querySelectorAll(".cell")
var restart=document.querySelector("#restart-button")
var gameisthere=true
game_arr=["","","","","","","","",""]
gamestatus="Its X's turn"
const currentPlayerTurn = () => `It's ${currentplayer}'s turn`;
const win=()=> `${currentplayer} won game`
const lose=()=>  `${currentplayer} lose game`
const draw=()=> `It's a draw`
document.querySelector(".game-status").innerHTML = currentPlayerTurn();
keypressarr.forEach(keypre=>{keypre.addEventListener('click',clickhandler)})
restart.addEventListener('click',restartfunc)

function clickhandler(cellclicked){
var cellis=cellclicked.target
var cellindex= parseInt(cellis.getAttribute('data-num'));
if(game_arr[cellindex]!=="" || !gameisthere){
    return;
}
cellplayed(cellis,cellindex)
evaluation()
}

function cellplayed(cellis,cellindex){
game_arr[cellindex]=currentplayer
cellis.innerHTML=currentplayer
}

function playerchange(){
    currentplayer = currentplayer === "X" ? "O" : "X";
    document.querySelector(".game-status").innerHTML = currentPlayerTurn();
}

function evaluation(){
var winningarr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var whowon=false
for(var i=0;i<winningarr.length;i++){
    var dum=winningarr[i]   //[0,1,2]
    var a=game_arr[dum[0]]
    var b=game_arr[dum[1]]
    var c=game_arr[dum[2]]
    if(a==="" || b==="" || c==="")
    {
        continue
    }
    else if (a===b && b===c)
    {
        whowon=true
        break
    }
   }
    if(whowon){
        document.querySelector(".game-status").innerHTML=win()
        gameisthere=false
        console.log("akhil")
        return
    }
    var drawstat=!game_arr.includes("")
    if(drawstat)
    {
        document.querySelector(".game-status").innerHTML=draw()
        gameisthere=false
        return 
    }
    playerchange()
}

function restartfunc(){
    gameisthere=true
    game_arr=["","","","","","","","",""]
    currentplayer = "X";
    document.querySelector(".game-status").innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "")
}
