let addToMinutes = document.querySelector(".addToMinutes");
let addToBreak = document.querySelector(".addToBreak");
let removeFromMinutes = document.querySelector(".removeFromMinutes");
let removeFromBreak = document.querySelector(".removeFromBreak");
//Adding and removing time buttons 
//end of that

let start = document.querySelector(".button-start");
let pause = document.querySelector(".button-pause");
let stop = document.querySelector(".button-stop");
//start, pause and stop buttons
//end of that

//passing value of minutes
let minutes = document.querySelector(".minutes");

addToMinutes.addEventListener("click", function(){
    let temp = parseInt(minutes.textContent);
    temp += 5;
    minutes.innerHTML = temp.toString();
});

removeFromMinutes.addEventListener("click",()=>{
    let temp = parseInt(minutes.textContent);
    temp -=5;
    if(temp <= 0) minutes.innerHTML = "0";
    else
    minutes.innerHTML = temp.toString();
});


//FUNCTIONS
