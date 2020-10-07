const testWrapper=document.querySelector(".test-wrapper");
const testarea=document.querySelector("#test-area");
const originText=document.querySelector("#origin-text p").innerHTML;
const resetButton=document.querySelector("#reset");
const theTimer=document.querySelector(".timer");




function leadingZero(time){
    if(time<=9){
        time='0'+time;
    }
    return time;
}
var interval;
var timerRunning=false;
var timer=[0,0,0,0];
function runTimer(){
    var currentTime=leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;
    timer[3]++;

timer[0]=Math.floor((timer[3]/100)/60);
timer[1]=Math.floor((timer[3]/100)-timer[0]*60);
timer[2]=Math.floor(timer[3]-timer[1]*100-timer[0]*6000);
}
function spellCheck(){
    let textEntered=testarea.value;
    let originTextMatch=originText.substring(0,textEntered.length);

    if(textEntered==originText){
        clearInterval(interval);
        testWrapper.style.borderColor="#429890";
    }else{
        if(textEntered==originTextMatch){
        testWrapper.style.borderColor="#65CCf3";}
        else{
        testWrapper.style.borderColor="#E95D0f";
    }
}}
function start(){
    let textEnteredLength=testarea.value.length;
    if(textEnteredLength===0 && !timerRunning){
        timerRunning=true;
        interval=setInterval(runTimer,10);
    }
    console.log(textEnteredLength);
}

function reset(){
    clearInterval(interval);
    interval=null;
    timer=[0,0,0,0];
    timerRunning=false;

    testarea.value='';
    theTimer.innerHTML="00:00:00";
    testWrapper.style.borderColor="grey";
}


testarea.addEventListener("keypress",start,false);
testarea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);