let keyTrainer = {
    chars:['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'],
    charCount:"" ,
    setCharCount(){
        let numOfSymbols
        while(true){
        numOfSymbols = prompt("Enter number of symbols", 0);
        if(numOfSymbols == null)return;
        if(this.checkPositiveInteger(numOfSymbols)) break;
    }  
    this.charCount = numOfSymbols;     
    },
    checkPositiveInteger(num){
        if(+num>0) return true;
      
    },
    random:function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
     task:'',
     createTask(){
        const arr = new Array(+this.charCount);
        for(let i = 0; i<arr.length; i++){
            arr[i]=this.chars[this.random(0,this.chars.length)];
        }
        return this.task = arr;
        
    }, 
    userErrors: 0,
    startTask(){
        this.userInput = prompt("Enter these symbols " + this.task.join(''),this.task.join(''));
        if(this.userInput == null)return;
        for(let i=0; i<this.task.length; i++){
            if(this.userInput[i]!=this.task.join('')[i]){
                this.userErrors++;
              } 
       }
       if(this.task.length < this.userInput.length){
           this.userErrors += (this.userInput.length-this.task.length);
       }
   
       if(this.userErrors == 0){
           alert("Congratulations");
       }else{
           alert(`You have made ${this.userErrors} errors. Try one more time` )
          } 
         
},
}

function run(obj){
    obj.setCharCount()
    if(obj.charCount == "") return;
    obj.createTask();
    obj.startTask();
}

run(keyTrainer);



