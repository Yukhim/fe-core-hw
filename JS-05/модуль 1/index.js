const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let userName = prompt("Enter your name");
let userPass;
let deny = "Действие отменено";
let prohibited = "Доступ запещен";
let welcome = "Добро пожаловать";

if(userName===null){
  alert(deny);
}else if(userName!==adminLogin){
  alert(prohibited);
}else{
  userPass = prompt("Enter your pass");
}

if(userPass===null){
  alert(deny);
}else if(userPass!==adminLogin){
  alert(prohibited);
}else{
  alert(welcome);
}

