// write function

const btnEncrypt = document.querySelector(`#encrypt`);
const btnDecrypt = document.querySelector(`#decrypt`);
const key = document.querySelector('#key');

const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let newText = '';

btnEncrypt.addEventListener('click', function encrypt() {
    const textarea = document.querySelector('#text');
    const keyValue = Number(key.value);

    for (const letter of textarea.value) {
        if (!listLetters.includes(letter)) {
            continue
        }
        
        const indexLetter = listLetters.findIndex((item) => item === letter);
        let indexNewLetter = indexLetter + keyValue

        if(indexLetter > 25) {
            indexNewLetter -= 26;
        }
        newText += listLetters[indexNewLetter]
        textarea.value = newText
    }
    newText = '';
});

btnDecrypt.addEventListener('click', function decrypt() {
    const textarea = document.querySelector('#text');
    const keyValue = Number(key.value);

    for (const letter of textarea.value) {
        if (!listLetters.includes(letter)) {
            continue
        }
        
        const indexLetter = listLetters.findIndex((item) => item === letter);
        let indexNewLetter = indexLetter - keyValue

        if(indexLetter < 0) {
            indexNewLetter += 26;
        }
        newText += listLetters[indexNewLetter]
        textarea.value = newText
    }
    newText = '';
});

module.exports = {encrypt};
module.exports = {decrypt};