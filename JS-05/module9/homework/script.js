
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector(".js-take-lap");
const laps = document.querySelector(".js-laps");

const timer = {
  timerId: null,
  startTime: null,
  isActive: false,
  deltaTime: 0,
  start(){
    if(this.isActive) return;
    this.isActive = true;
    
    this.startTime = Date.now()-this.deltaTime;
    this.timerId = setInterval(()=>{
      const currentTime = Date.now()
     this.deltaTime = currentTime - this.startTime;
    formatTime(this.deltaTime);
    updateClockface(this.deltaTime);
    }
  ),100
  },
  stop(){
    clearInterval(this.timerId);
    this.isActive = false;
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
    
  },
  pause(){
    clearInterval(this.timerId);
    this.isActive = false;

  }
};

startBtn.addEventListener("click", handleStartBtnClick);
stopBtn.addEventListener("click", handleStopBtnClick);
lapBtn.addEventListener("click", handleLapBtnClick);
const clockface = document.querySelector(".js-time");

function handleStartBtnClick(){
  if(!timer.isActive){
    timer.start();
    this.textContent = "Pause"
  }
  else{
    timer.pause();
    this.textContent="Continue"
  }
}

function handleStopBtnClick(){
  timer.stop();
  laps.innerHTML = "";
  startBtn.textContent = "Start"
}

function handleLapBtnClick(){
  const lap = document.createElement("li");
  lap.textContent = `${formatTime(timer.deltaTime)}`;
  laps.appendChild(lap);
  //console.log(formatTime(timer.deltaTime));
}

function updateClockface(time){
  const formattedTime = formatTime(time)
  clockface.textContent = formattedTime;

}
function formatTime(ms){
const date = new Date(ms);
let minutes = date.getMinutes()<10? `0${date.getMinutes()}`: date.getMinutes();
let seconds = date.getSeconds()<10? `0${date.getSeconds()}`: date.getSeconds();
let mseconds = String(date.getMilliseconds()).slice(0,1);;

return `${minutes}:${seconds}.${mseconds}`
}
























// const timer = {
//   timerId: null,
//   startTime: null,
//   isActive: false,
//   currentTime: 0,
//   start(){
//     if(this.isActive) return;
//     startBtn.textContent = "Pause";
//      this.startTime = Date.now()-this.currentTime;
//      this.timerId = setInterval(()=>{
//       this.currentTime = Date.now() - this.startTime;
      
//       updateClockface(this.currentTime)
//       this.isActive = true;
//     },100)
//   },
//   pause(){
//     clearInterval(this.timerId);
//     this.isActive = false;
//   },
//   stop(){
//     this.pause();
//     this.currentTime = 0;
//     updateClockface(this.currentTime);
    
//   },
// }

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-reset");
// const clockface = document.querySelector(".js-time");

// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));


// function formatTime(ms){
//   const date = new Date(ms);

//   let minutes = date.getMinutes()<10? `0${date.getMinutes()}`:date.getMinutes();
//   let seconds = date.getSeconds()<10? `0${date.getSeconds()}` : date.getSeconds();
//   let mseconds = String(date.getMilliseconds()).slice(0,1);

//   return `${minutes}:${seconds}.${mseconds}`;
// }

// function updateClockface(time){
//   const formattedTime = formatTime(time);
//   clockface.textContent = formattedTime;
// }