// import { checkTypeNumber } from "./case2.js";
const { checkTypeNumber } = require("./case2");

checkEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email == undefined) {
    return "ERROR: There is no parameter!";
  } else if (regex.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
};

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());
