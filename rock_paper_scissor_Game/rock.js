let userScore=0;
let compScore=0;
let choice=document.querySelectorAll(".choices");
let msgBox=document.querySelector(".finaldescision");
let comp_score=document.querySelector(".computer-scores");
let user_score=document.querySelector(".your-scores");

let userCount=0;
let compCount=0;
let showWinner=(userWin,user,comp)=>{
    if(userWin){
        console.log("User won");
        msgBox.innerText=`You win!${user} beats ${comp}`;
        msgBox.style.backgroundColor="green";
        userCount++;
        user_score.innerText=userCount;
    }
    else{
        console.log("Comp won");
        msgBox.innerText=`You lose!${comp} beats ${user}`;
        msgBox.style.backgroundColor="red";
        compCount++;
        comp_score.innerText=compCount;
    }
}

let checkWinner=(user,comp)=>{
    if(comp===user){
        console.log("its a draw");
        msgBox.style.backgroundColor="palevioletred";
        msgBox.innerText="it's a draw.Play again.";
    }
    else{
        let userWin=true;
        if(user==="rock"){
            //scissor or paper
            userWin= comp==="scissor" ? true:false;
        }
        else if(user==="paper"){
            userWin= comp==="rock"? true:false;
        }
        else{
            userWin= comp==="rock"? false:true;
        }
        showWinner(userWin,user,comp);
    }
}
let compChoice=()=>{
    let allChoice=["rock","paper","scissor"];
    let compOptions=Math.floor(Math.random()*3);
    return allChoice[compOptions];
}
let playGame=(user)=>{
    console.log("user choice =",user);
    const comp= compChoice();
    console.log("Computer choice =",comp);
    checkWinner(user,comp);
}

choice.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userChoice=option.getAttribute("id");
        playGame(userChoice);     
    });
});

