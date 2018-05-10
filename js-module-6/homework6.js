

//   const chars = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
//   function setCharCount(){
//             let numOfSymbols = parseInt(prompt("Enter number of symbols", 0));
//         return numOfSymbols;
//   }
//   const set = setCharCount();
//   function createTask(){
//             let arr=[];
//              for(let i = 0; i<set; i++){
//                  arr[i]=chars[getRandomInt(0,26)];
//              }
//              return arr;
//          }
//  const task = createTask().join('');
//  let userInput;
//  function startTask(){
//      let start = prompt("Repeat these symbols "+ task);
//      userInput= start;
//  }
// startTask();
//  let userErrors = 0;
//  function checkMistakes(){
//     for(let i=0; i<task.length; i++){
//         if(userInput[i]!=task[i]){
//             userErrors++;
//         }
//         return userErrors;
//     }
//  }
// let mist = checkMistakes();

// if(mist == 0){
//     console.log("Congratulations");
// }else{
//     console.log("You've got " + mist + "mistakes");
// }

// function checkPositiveInteger(numOfSymbols){
        //     while(numOfSymbols<=0|| isNaN(numOfSymbols)==true||numOfSymbols==""){
        //         numOfSymbols = prompt("Enter correct number", 0);
        //     };
        //     return numOfSymbols;
        // }
 


let keyTrainer = {
    chars:['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'],
    charCount: function setCharCount(){
        this.numOfSymbols = prompt("Enter number of symbols", 0);
        if(this.numOfSymbols == null){
        return    this.numOfSymbols = "";
        }else{
            this.checkPositiveInteger(this.numOfSymbols);
        }
               
    },
    // setCharCount: function(){
    //     this.numOfSymbols = prompt("Enter number of symbols", 0);
    //     if(this.numOfSymbols == null){
    //     return;
    //     }else{
    //         this.checkPositiveInteger(this.numOfSymbols);
    //     }
               
    // },
    checkPositiveInteger: function(num){
        parseInt(num);
        while(num<=0){
            num = parseInt(prompt("Enter correct number", 1));
          };
   return this.numOfSymbols = num;
    },
    random:function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
     task: function createTask(){
         let arr = [];
        for(let i = 0; i<this.numOfSymbols; i++){
            arr.push(this.chars[this.random(0,this.chars.length)]);
        }
        return this.arr = arr;
        
    },
    userErrors: 0,
    startTask:function(){
        this.userInput = prompt("Enter these symbols " + this.arr.join(''));
        for(let i=0; i<this.arr.length; i++){
            if(this.userInput[i]!=this.arr.join('')[i]){
                this.userErrors++;
              } 
       }
       if(this.arr.length!=this.userInput.length){
        this.userErrors += Math.abs(this.arr.length -this.userInput.length);
       }
       if(this.userErrors == 0){
           alert("Congratulations");
       }else{
           alert(`You have made ${this.userErrors} errors. Try one more time` )
          } 
         
},
}

function run(obj){
    obj.charCount()
    if(obj.numOfSymbols == "") return;
    obj.task();
    obj.startTask();
}

run(keyTrainer);

// function checkPositiveInteger(num){
//     while(num<=0|| isNaN(num)==true||num==""){
//         num = prompt("Enter correct number", 0);
//     };
//     return num;
// }

