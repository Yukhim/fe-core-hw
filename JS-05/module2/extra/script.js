const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let userPass;
let isCorrect = false;

do {
  userPass = prompt("Enter password");
  if (userPass == null) {
    break;
  }
  if (attempts > 0) {
    console.log(attempts);
    for (let i = 0; i < passwords.length; i++) {
      if (userPass == passwords[i]) {
        alert("Welcome");
        isCorrect = true;
        
      }
    }
    if (!isCorrect) {
      alert(`You have ${attempts - 1} attempts`);
      attempts = attempts - 1;
      continue;
    }
  } else {
    alert("You don't have any attempts");
    break;
  }
} while (!isCorrect);
