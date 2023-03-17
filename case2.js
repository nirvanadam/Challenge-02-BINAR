checkTypeNumber = (number) => {
  if (number == undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof number != "number") {
    return "Error: Invalid data type";
  } else if (number % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

exports.checkTypeNumber = checkTypeNumber;
