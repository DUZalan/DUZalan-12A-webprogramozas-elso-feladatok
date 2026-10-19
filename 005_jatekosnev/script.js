// Ide írd az elemekre hivatkozást, az eseménykezelő hozzárendelését
// és a saját függvényedet!

const input = document.querySelector('#nev')
const button = document.querySelector('#gomb')
const nev = document.querySelector('#jatekosnev')

button.addEventListener('click', showName)
// input.addEventListener('input', showName)

function showName() {
    if (input.value.trim() === '' ) {
        nev.textContent == 'Vendég'
    }
    else {
        nev.textContent = input.value;
    }



}