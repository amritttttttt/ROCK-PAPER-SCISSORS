

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mesg = document.querySelector("#mesg")
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    
   return options[randidx];

}

const drawgame = ()=>
{
    console.log("game was draw.Play again")
    // mesg.innerText = "game was draw"
   mesg.style.backgroundcolor = "red";

}



const showWinner = (userwin) =>{
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;
        // console.log("you win");
        mesg.innerText = "you win brooo"
        mesg.style.backgroundcolor = "green"
    } else{
        compScore++;
        compscorepara.innerText =  compScore;
        // console.log("you lose");
        mesg.innerText = "you lose."
        mesg.style.backgroundcolor = "red";


    }
}

const playgame = (userchoice) =>{

    //genrate computer choice

    const compchoice = gencompchoice();
   





    if(userchoice === compchoice){
     drawgame();
    } 
    
    
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper"? false : true;
        } else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false :true;
        } else{
            userwin = compchoice === "rock " ? false : true;
        }
        showWinner (userwin);
    }
}





choices.forEach((choice)=>{

 choice.addEventListener("click",()=>{
 const userchoice = choice.getAttribute("id");
 
 playgame(userchoice)
 

    });
});


