function getAngkaTerbesarKedua(dataNumbers) {
  let maxNumber = -Infinity;
  let secondMaxNumber = -Infinity;

  dataNumbers.forEach((number) => {
    if (number > maxNumber) {
      secondMaxNumber = maxNumber;
      maxNumber = number;
    } else if (number > secondMaxNumber && number !== maxNumber) {
      secondMaxNumber = number;
    }
  });
  return secondMaxNumber;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
