let userInput = document.getElementById('pigInput');
let submitButton = document.getElementById('submitButton');
let userInputString = userInput.value;
let pigOutput = document.getElementById('pigOutput');
let clearEntry = document.getElementById('clearEntry');
let wordCount = document.getElementById('wordCount');


const summonThePig = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let symbols = ['.', ',',];
  let result = str.split('');

  if (vowels.includes(str.charAt(0).toLowerCase())) {
    return str += 'way';
  } else if (symbols.includes(str.charAt(0))) {
    return str;
      } else {
    for ( let i = 0; i < str.length; i++) {
      if (!vowels.includes(str.charAt(i))) {
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join('');
      }
    }
  }

};

let outputString = '';
let i=1;

userInput.addEventListener('keypress', (e) => {
  let key = e.which || e.keyCode;
   if (key === 13) {
    outputString += (summonThePig(userInput.value) + " ");
    console.log(outputString);
    userInput.value = '';
    wordCount.innerHTML = "Words Stored: " + i++;

}
});

submitButton.addEventListener('click', () => {
  pigOutput.value = outputString;
})


clearEntry.addEventListener('click', () => {
  outputString = '';
  wordCount.innerHTML = "";
  i = 1;
  pigOutput.value = "";
});
