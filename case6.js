function getAngkaTerbesarKedua(dataNumbers) {
  if (dataNumbers === undefined) {
    return "ERROR: There is no parameter!";
  } else if (typeof dataNumbers !== "object") {
    return "ERROR: Invalid type data! It must be an array!";
  } else {
    sortedNumber = dataNumbers.sort();
    secondBiggestNumber = sortedNumber[sortedNumber.length - 2];
  }

  return secondBiggestNumber;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
