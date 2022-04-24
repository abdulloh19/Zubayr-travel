// const $500 = Mehmonxona;
// const $250 = Bilet;



const wrapperValeu = document.querySelector(".wrapper");

const usd = 11000;
const evro = 13000;
const ticket = 250;
const hotel = 500;



const pulMiqdori = usd * hotel + evro * ticket;
const xarajatlar = +prompt("O'zingizdagi pul miqdorini kiriting");

alert(`
    Mehmonxona xarajati uchun: $${hotel};
    Bilet narhi uchun: $${ticket}
`)

if (pulMiqdori <= xarajatlar) {
    wrapperValeu.textContent = "Oq yo'l Alisher"
} else {
    wrapperValeu.textContent = "Alisher ozgina sabr qilish kerak bo'lar ekan"
};



