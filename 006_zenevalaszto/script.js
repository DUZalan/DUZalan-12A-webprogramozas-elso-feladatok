// Itt hivatkozz az elemekre, rendeld hozzá az eseménykezelőt,
// és írd meg a saját függvényedet!

const valasztas = document.querySelector('#stilus')
const valasztott = document.querySelector('#valasztott')

valasztas.addEventListener('change', listaFrissit)

function listaFrissit() {
    valasztott.textContent = valasztas.value
    
    document.title = `${valasztas.value} – Zenei stílusválasztó`
}