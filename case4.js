function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const checkNumber = parseInt(password);

  if (password == undefined) {
    return "ERROR: There is no parameter!";
  } else if (typeof password === "number") {
    return "ERROR: Invalid type data!";
  } else {
    return regex.test(password);
  }
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
