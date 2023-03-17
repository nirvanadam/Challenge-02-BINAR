const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

function changeWord(selectedText, changedText, text){
   return text.replace(selectedText, changedText);
}

console.log(changeWord('mencintai', 'membenci', kalimat1));

console.log(changeWord('bromo', 'semeru', kalimat2));