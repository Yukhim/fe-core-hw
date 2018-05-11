

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
  };
  
  const buttons = Array.from(document.querySelectorAll("button"));
  const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

  const key = document.querySelector(".keyboard__btn");
 
  window.addEventListener("keydown", function(elem){
      //console.log(elem.key);
      for(let i=0; i<buttons.length; i++){
          if(buttons[i].innerHTML == elem.key){
              buttons[i].classList.add("keyboard__btn--active");
              playSound(buttons[i].getAttribute('data-note'));
          } else{
            buttons[i].classList.remove("keyboard__btn--active");
          }

      }
  })

  
  const onClick = (evt)=>{
     buttons.forEach(btn =>{
         btn.classList.remove("keyboard__btn--active");
         if(evt.target.classList.contains("keyboard__btn")){
            evt.target.classList.add("keyboard__btn--active"); 
            playSound(evt.target.getAttribute('data-note'));
         }
     })
    
  }
window.addEventListener('click', onClick);
 

const switcher = document.querySelector("#slideThree");
const note  = document.querySelectorAll(".sonidos");

const musicSwitch = () =>{
note.forEach((val, i) =>{
    if(switcher.checked){
        note[i].muted = false;
    }else{
        note[i].muted = true;
    }
})
}  
switcher.addEventListener('change', musicSwitch);