const cells=document.querySelectorAll(".cell");
const restart=document.querySelector(".restart");
const the_winner=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];
let option=["","","","","","","","",""];
let current_player="x";
let running = false;

startgame();
function startgame(){
   cells.forEach(cell=> cell.addEventListener("click",cellclicked));
   restart.addEventListener("click",restartgame);
   running=true;
}
function cellclicked(){
   const cellIndex= this.getAttribute("cellIndex");
   if(option[cellIndex]!=""||!running){
      return;
   }
   updatecell(this,cellIndex);
   check();
   changeplayer();


}
function updatecell(cell,index){
   cell.textContent = current_player;
   option[index]= current_player;


}
function changeplayer(){
   current_player=(current_player=="x")? "o" : "x";

}
function check(){
   let win=false;
   for(let i=0;i<the_winner.length;i++){
      const condation =the_winner[i];
      const cell1=option[condation[0]];
      const cell2=option[condation[1]];
      const cell3=option[condation[2]];
      if(cell1 == ""||cell2==""||cell3==""){
         continue;
      }
      if(cell1==cell2&&cell2==cell3){
         win=true;
         break;
      }

   }
   if (win){
      alert(" The winner is "+current_player);
      running=false;
   }
   else if(!option.includes("")){
      alert(" Draw !");


   }
}
function restartgame(){
option=["","","","","","","","",""];
current_player="x";
cells.forEach(cell=>cell.textContent="");
running=true;

}