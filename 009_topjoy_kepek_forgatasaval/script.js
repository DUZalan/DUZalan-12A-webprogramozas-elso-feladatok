const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('#szoveg');
const tarolo = document.querySelector('.tarolo');
const tomb = [0]
let timeout;

//console.log(kupak, szoveg, tarolo);
const uzik = [];
let isClosed = true;

// uzik.csv fetch
window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch('./uzik.csv');
        //console.log(response);
        const text = await response.text();
        //console.log(text);

        const sorok = text.split('\n').map(sor => sor.trim());
        //console.log(sorok);
        
        sorok.forEach(sor => {
            uzik.push(sor);
        });
        
    } catch (error) {
        console.log(error);
    }  
});

//console.log(uzik);

const animateCap = async (start, end, updateText) => {
    const step = start < end ? 1 : -1;
    for (let index = start; index !== end + step; index += step) {
        await new Promise(resolve => setTimeout(resolve, 13));
        kupak.src = `images/bottlecap_${index}.png`;
    }
    if (updateText) {
        szoveg.textContent = isClosed ? uzik[Math.floor(Math.random() * uzik.length)] : '';
    }
};

window.addEventListener("click", async () => {
    if (isClosed) {
        await animateCap(0, 10, true);
        isClosed = false;
    } else {
        await animateCap(10, 0, true);
        isClosed = true;
    }
});

// https://github.com/kpisti18/12A_webprogramozas_2024_2025/blob/master/9_topjoy_nyilt_nap/script.js