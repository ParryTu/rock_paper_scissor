function computerPlay () {
let randomnum = Math.random();
 if (randomnum < (1/3)) {
    return "rock"
   } else if (randomnum >= (2/3)){
    return "paper"
   } else {
       return "scissors"
   }
 }

function round(){
    let comp = computerPlay();
     let stdpick = (prompt("Pick rock, paper or scissors")).toLowerCase();
     if (stdpick == comp) {
         return "It's a draw"
     } 

     if (comp=="rock"){
         if (stdpick == "scissors") {
             return "Computer wins"
         } else {
             return "You win"
         }
     }

     if (comp=="paper"){
        if (stdpick == "scissors") {
            return "You win"
        } else {
            return "Computer wins"
        }
    }

    if (stdpick =="rock"){
        return "You win"
     } else {
        return "Computer wins"
     }
    
}



function game (){
    let compScore = 0;
    let yourScore = 0;

    while (compScore <5 && yourScore <5){
        let rResult = round();
        if (rResult == "Computer wins"){
            compScore++;
        } else if (rResult == "You win") {
            yourScore++;
        } else {
            console.log("its a draw");
        }
        console.log("your score is " + yourScore);
        console.log("computer score is " + compScore);
    }
    if (compScore ==5) {
     return "You lose"
    } else {
     return "you winner"
    }

}