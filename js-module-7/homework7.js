 let en="qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let ua="йцукенгшщзхїфівапролджєячсмитьбю.";
let ru="йцукенгшщзхъфывапролджэячсмитьбю.";

const keyboard={
  lang:["en", "ua", "ru"],
  currentLang:'',
};
keyboard.layouts={};

keyboard.layouts.en=addKeyboardLayout(en,"a","z");
keyboard.layouts.ua=addKeyboardLayout(ua,"ф","я");
keyboard.layouts.ru=addKeyboardLayout(ru,"ф","я");

function addKeyboardLayout(alphabet, char1, char2) {
 obj={};
  const arr = alphabet.split('');
  const keyboard = [arr.slice(0, arr.indexOf(char1)), arr.slice(arr.indexOf(char1), arr.indexOf(char2)), arr.slice(arr.indexOf(char2))];
  obj["topRow"]=keyboard[0];
  obj["middleRow"]=keyboard[1];
  obj["bottomRow"]=keyboard[2];
  return obj;
}

let lang;
do{
  lang = prompt('Please choose keyboard language \n En-0, Ru-1, Ua-2', 0);
  switch (lang){
     case "0":{
     keyboard['currentLang']='en';
      break;
    }
       case "1":{
     keyboard['currentLang']='ru';
      break;
    }
       case "2":{
     keyboard['currentLang']='ua';
      break;
    }
    default:{
      alert("Enter Correct number!!!")
     break;
    }
      
  }
   }while(lang >= 3 ||lang<0|| isNaN(lang)==true||lang=="");


const myKeyboard = document.querySelector(".myKeyboard");

function createObj(obj){
  if (obj.currentLang =="") return;

  for(let i = 0; i<Object.values(obj.layouts[`${obj.currentLang}`]).length; i++){

    for(let j = 0; j<Object.values(obj.layouts[`${obj.currentLang}`])[i].length; j++){
    const elem = document.createElement("div");
    elem.classList.add('letter');
    elem.textContent = Object.values(obj.layouts[`${obj.currentLang}`])[i][j];
    myKeyboard.appendChild(elem);
    }
    myKeyboard.innerHTML += `<br>`;
  }
  
}
createObj(keyboard);