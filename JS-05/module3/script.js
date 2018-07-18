const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let userLogin = prompt("Enter Your Login Please");

const checkLoginValidity = function(login) {
  if (login.length <= 16 && login.length > 4) {
    return true;
  }
  return false;
};

const checkIfLoginExists = function(logins, login) {
  if (logins.includes(login)) {
    return false;
  }
  return true;
};

const addLogin = function(logins, login) {
  if (!checkLoginValidity(login)) {
    alert("Ошибка! Логин должен быть от 4 до 16 символов");
  } else {
    if (!checkIfLoginExists(logins, login)) {
      alert("Такой логин уже используется");
    } else {
      logins.push(login);
      alert("Логин успешно добавлен!");
    }
  }
  console.log(logins);
  return logins;
};

//checkLoginValidity(userLogin);

//checkIfLoginExists(logins, userLogin);
addLogin(logins, userLogin);
