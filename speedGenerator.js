const sd = require("prompt-sync");
const prompt = sd();

function speedDetector(){
    let speed = prompt("What is the speed? ");
    if (speed <= 70) {
        console.log("Ok");
    }else if(speeed > 70 && speed <= 130){
        let demeritpoint = (speed - 70)/ 5;
        console.log('points: ${demeritPoint}');
    }else{
        console.log("Licence suspended");
    }
}

speedDetector();