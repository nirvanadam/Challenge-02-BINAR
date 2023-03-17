function getSplitName(personName) {
  if (typeof personName !== "string") {
    return "ERROR: Invalid type data!";
  }

  const splitName = personName.split(" ");
  const totalSyllables = splitName.length;

  const splitNameObj = {};
  if (totalSyllables > 3) {
    return "ERROR: This function is only for 3 characters name!";
  } else if (totalSyllables === 1) {
    splitNameObj.firstName = splitName[0];
    splitNameObj.middleName = null;
    splitNameObj.lastName = null;
  } else if (totalSyllables === 2) {
    splitNameObj.firstName = splitName[0];
    splitNameObj.middleName = null;
    splitNameObj.lastName = splitName[splitName.length - 1];
  } else if (totalSyllables === 3) {
    splitNameObj.firstName = splitName[0];
    splitNameObj.middleName = splitName[1];
    splitNameObj.lastName = splitName[2];
  }

  return splitNameObj;
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
