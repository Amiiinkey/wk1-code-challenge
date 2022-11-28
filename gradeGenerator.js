
const prompt=require("prompt-sync")({sigint:true}); 

function generator(){
    let grade = prompt('Enter your percantage: ');
    if(grade <= 100 && grade > 79){
        console.log("Your grade ia A");
    }else if(grade <=79 && grade > 59){
        console.log("Your grade is B");
    }else if(grade <=59 && grade >49){
        console.log("Your grade is C");
    }else if(grade <=49 && grade >39){
        console.log("Your grade is D");
    }else{
        console.log("Your grade is E");
    }
}

generator()
