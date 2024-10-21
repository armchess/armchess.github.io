const timeTag1 = document.getElementById("h3_1");
const timeTag2 = document.getElementById("h3_2");
const realTimeTag = document.getElementById("real_time");
const timer = document.getElementsByTagName("h2")[0];
const startButton = document.getElementById("start_button");
const settingsIcon = document.getElementById("settings_icon");
const body = document.getElementsByTagName("body")[0];
let timerInActive = false;
const minMilObj = {};
let bodyPass = "";
let myPass = /muradyan/

body.addEventListener("keydown", (e) => {
  if (bodyPass.length > 100) {
    bodyPass = "";
  }
  if(e.key === "Enter"){
    if(myPass.test(bodyPass)) {
      body.style.display = "block"
    }
  }
  bodyPass += e.key;
})

setInterval(()=>{
  let date = new Date();
  let time = date.toTimeString().split(" ")[0]
  const timeDifferentItems = date.toString().split(time)
  realTimeTag.innerText = time;
  timeTag1.innerText = timeDifferentItems[0];
  timeTag2.innerText = timeDifferentItems[1];
  if(timerInActive){
    if(countdown(minMilObj)){
      timerInActive = false;
    }
  }
}, 1000)

function countdown(minMilObj){
  let [minute, milisecond] = timer.innerText.split(":");
  minMilObj = { minute, milisecond };
  if(minMilObj.minute === "00" && minMilObj.milisecond === "00"){
    timer.innerText = "TIME END"
    return true;
  }
  if(minMilObj.milisecond === "00"){
    minMilObj.milisecond = "59";
    minMilObj.minute = minMilObj.minute - 1 < 10 
      ? "0" + (minMilObj.minute - 1)
      : (minMilObj.minute - 1).toString();
  }
  minMilObj.milisecond = minMilObj.milisecond - 1 < 10 
      ? "0" + (minMilObj.milisecond - 1)
      : (minMilObj.milisecond - 1).toString();
  timer.innerText = minMilObj.minute + ":" + minMilObj.milisecond
}

startButton.addEventListener("click", () => {
  if(timerInActive){
    return;
  }
  startButton.innerText = "Button inactive"
  timerInActive = true;
})

settingsIcon.addEventListener("click", () => {
  const timerTime = prompt("խնդրում ենք մուտքագրել ուշացման ժամանակը (10-60 րոպե)");
  if(timerTime){
    if(timerTime >= 10 && timerTime <= 60){
      timer.innerText = `${Math.floor(timerTime)}:00`;
    } else {
      alert("ծնդրում ենք մուտքագրել 10-60 ընկած հատվածում թիվ");
    }
  }
})