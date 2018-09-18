
const timer = {
  timerId: null,
  startTime: null,
  isActive: false,
  currentTime: 0,
  start(){
    if(this.isActive) return;
    
     this.startTime = Date.now()-this.currentTime;
     this.timerId = setInterval(()=>{
      this.currentTime = Date.now() - this.startTime;
      
      updateClockface(this.currentTime)
      this.isActive = true;
    },100)
  },
  pause(){
    clearInterval(this.timerId);
    this.isActive = false;
  },
  stop(){
    this.pause();
    this.currentTime = 0;
    updateClockface(this.currentTime);
    
  },
}

const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const clockface = document.querySelector(".clockface")

startBtn.addEventListener("click", timer.start.bind(timer));
pauseBtn.addEventListener("click", timer.pause.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));


function updateClockface(time){
  const formattedTime = formatTime(time);
  clockface.textContent = formattedTime;
}

function formatTime(ms){
  const date = new Date(ms)

  let minutes = date.getMinutes()<10 ? `0${date.getMinutes()}`: date.getMinutes();
  let seconds = date.getSeconds()<10 ? `0${date.getSeconds()}`: date.getSeconds();
  let mseconds = String(date.getMilliseconds()).slice(0,1);
  return `${minutes}:${seconds}.${mseconds}`;

}