// Itt hivatkozz az elemekre, rendeld hozzá az eseménykezelőt,
// és írd meg a saját függvényedet!

const textArea = document.querySelector('#uzenet')
const darab = document.querySelector('#darab')
let osszesKarakter = document.querySelector('#egesz')

textArea.addEventListener('input', szovegHossz)

function szovegHossz() {
    darab.textContent = textArea.value.length
    let maradt = osszesKarakter.value - textArea.value.length

    osszesKarakter.textContent = maradt
}