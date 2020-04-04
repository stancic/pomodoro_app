

let addToMinutes = document.querySelector(".addToMinutes");
let removeFromMinutes = document.querySelector(".removeFromMinutes");
//Adding and removing time buttons 
//end of that

let start = document.querySelector(".button-start");
let pause = document.querySelector(".button-pause");
let reset = document.querySelector(".button-stop");
let rest = document.querySelector(".button-rest");
let work = document.querySelector(".button-work");
//start, pause and stop buttons
//end of that

//helping variables
let timer;
let status;
let tempSeconds;
let tempMinutes;

//passing value of minutes
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");


addToMinutes.addEventListener("click", addFiveMinutes);
removeFromMinutes.addEventListener("click", removeFiveMinutes);


rest.addEventListener("click", ()=>{
    minutes.innerHTML = "05";
});

work.addEventListener("click", ()=>{
    minutes.innerHTML = "25";
});


start.addEventListener("click", changeTime);

reset.addEventListener("click", resetTime);

pause.addEventListener("click", pauseTime);

//FUNCTIONS

function addFiveMinutes(){
    let temp = parseInt(minutes.textContent);
    temp += 5;
    minutes.innerHTML = temp.toString();
}

function removeFiveMinutes(){
    let temp = parseInt(minutes.textContent);
    temp -=5;
    if(temp <= 0) minutes.innerHTML = "0";
    else
    minutes.innerHTML = temp.toString();
}

function changeTime(){
    if(status == "stop"){
        tempSeconds = parseInt(seconds.textContent);
        tempMinutes = parseInt(minutes.textContent);
    }
    else{
        tempSeconds = parseInt(seconds.textContent);
        tempMinutes = parseInt(minutes.textContent);
        status == "start";
    }
    timer = setInterval(()=>{
        tempSeconds--;
        if(tempSeconds<=9){
            tempSeconds = "0" + tempSeconds;
        }
        if(tempSeconds == 0){
            tempSeconds = "00";
        }
        if(tempSeconds == "0-1"){
            tempSeconds = 59;
        } 
        if(tempSeconds == 59){
            tempMinutes--;
        }
        if(tempMinutes == 0 && tempSeconds == 0){
            status="clear";
            clearInterval(timer);
            tempMinutes = 25;
            tempSeconds = "00";
        }
        seconds.innerHTML = tempSeconds.toString();
        minutes.innerHTML = tempMinutes.toString();
    }, 1000);
}


function pauseTime(){
    status = "stop";
    let tempSeconds = seconds.textContent;
    let tempMinutes = minutes.textContent;
    seconds.innerHTML = tempSeconds;
    minutes.innerHTML = tempMinutes;
    clearInterval(timer);
}

function resetTime(){
    minutes.innerHTML = "25";
    seconds.innerHTML = "00";
    clearInterval(timer);
}
//FUNCTIONS END

