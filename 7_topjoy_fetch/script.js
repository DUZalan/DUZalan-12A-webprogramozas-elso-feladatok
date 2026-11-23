const messages = [];
const messageBox = document.querySelector('#messageBox');
const messageButton = document.querySelector('#messageButton');
//console.log(messages, messageBox, messageButton);

window.addEventListener('DOMContentLoaded', async () => {

    try {
        const uzik = await fetch("./uzik.csv");
        let tomb = await uzik.text();
        console.log(tomb);

        messageButton.addEventListener('click', kattint)

        const uzenet = tomb.split("\n")

        function kattint() {
        let index = Math.floor(Math.random() * uzenet.length) + 1

        messageBox.innerHTML = uzenet[index]
        console.log(uzenet[index])
        }
        
    } catch (error) {
        console.error(error);
    }

});
// getText("./uzik.csv");

// async function getText(file) {
//     let x = await fetch(file);
//     let y = await x.text();
//     console.log(y);
//     messageButton.addEventListener('click', kattint)

//     const uzenet = y.split("\n")

//     function kattint() {
//         let index = Math.floor(Math.random() * uzenet.length) + 1

//         messageBox.innerHTML = uzenet[index]
//         console.log(uzenet[index])
//     }
//   }
