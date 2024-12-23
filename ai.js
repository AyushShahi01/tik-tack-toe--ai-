let winCondition=[[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]];

let gameBox = [0, 0, 0, 0, 0, 0, 0, 0 , 0];
let winChance = [3, 2, 3, 2, 4, 2, 3, 2, 3];
let playerMerit = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let computerMerit = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let exit= 0;
let winner= 0;
let flag= 0;

/*  
    in cal array:
    0 is empty 
    1 is player 
    -1 is computer 
*/

// updaits all arrays after player move
function update(playerMove){
    gameBox[playerMove] = 1;

    //loss chance + update in gamebox
    for(let i=0; i<8; i++){
        lag = 0;
        for(let j=0; j<3; j++){
            if(gameBox[winCondition[i][j]] == 1){
                
                flag++;
            }
            
        }
        if(flag>0){
            for(let k=0; k<3; k++){
                
                if(flag==1){
                    playerMerit[winCondition[i][k]]=1;
                }
                if(flag==2){
                    playerMerit[winCondition[i][k]]=2;
                }
            }
        }
    }

    //win chance
    for(let i=0; i<8; i++){
         flag = 0;
        for(let j=0; j<3; j++){
            if(winCondition[i][j]==-1){
                flag++;
            }
        }
        if(flag==1){
            computerMerit[winCondition[i][k]]=1;
        }
        if(flag==2){
            computerMerit[winCondition[i][k]]=2;
        }
    }

}





function check(){
    for(let i=0; i<8; i++){
        if(gameBox[winCondition[i,0]]==gameBox[winCondition[i,1]]==gameBox[winCondition[i,2]]){
            win=gameBox[winCondition[i,0]];
            if(win==1){
                console.log("player win");
            }
            else{
                console.log("computer win")
            }
            exit=1;
        }
    }
}


function decision(){
    

}



// Main
// do {
//     console.log("This is the player first model");
//     let playerMove = prompt("Enter the move index");
//     update(playerMove);
// } while (exit==0);

    let playerMove = prompt("Enter the move index");
    update(playerMove);
    

