var hour = 00;
var min = 00;
var sec = 00;
var msec = 00;
var hourheading = document.getElementById("hour");
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecheading.innerHTML = msec;
    if (msec >= 100){
        sec++
        msec = 0
        secheading.innerHTML = sec;
    }else if(sec >= 60){
        min++
        sec = 0
        minheading.innerHTML = min;
    }else if(min >= 60){
        hour++
        min = 0
        hourheading.innerHTML = hour;
    }else if(hour >= 12){
        
        hour = 0
    }

    hourheading.innerHTML=set(hour);
    minheading.innerHTML=set(min);
    secheading.innerHTML=set(sec);
    msecheading.innerHTML=set(msec);

}

function set(n) {
    return ('00' + n).substr(-2);
}

function start(){
    interval = setInterval(timer,10)

    
    stopb=document.getElementById("start")
    pushb=document.getElementById("push")
    resetb=document.getElementById("reset")

    stopb.disabled=true;
    pushb.disabled=false;
    resetb.disabled=false;

}
function push(){
    clearInterval(interval)
    stopb.disabled=false;
    pushb.disabled=true;
    resetb.disabled=false;;
}
function reset(){
    hour = 00;
    min = 00;
    sec = 00;
    msec = 00;
    hourheading.innerHTML = "00";
    minheading.innerHTML = "00";
    secheading.innerHTML = "00";
    msecheading.innerHTML = "00";
    push();

    stopb.disabled=false;
    pushb.disabled=false;
    resetb.disabled=true;;
}

