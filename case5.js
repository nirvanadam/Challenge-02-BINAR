function getSplitName(personName) {
  if (typeof personName !== "string") {
    return "ERROR: Invalid type data!";
  }

  const splitName = personName.split(" ");
  const totalSyllables = splitName.length;

  if (totalSyllables > 3) {
    return "ERROR: This function is only for 3 characters name!";
  }

  const splitNameObj = {};
  if (totalSyllables === 1) {
    splitNameObj.firstName = splitName[0];
  } else if (totalSyllables === 2) {
    splitNameObj.firstName = splitName[0];
    splitNameObj.secondName = splitName[1];
  } else if (totalSyllables === 3) {
    splitNameObj.firstName = splitName[0];
    splitNameObj.secondName = splitName[1];
    splitNameObj.thirdName = splitName[2];
  }

  return splitNameObj;
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
