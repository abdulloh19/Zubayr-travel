const wrapperValeu = document.querySelector(".wrapper");

const usd = 11000;
const evro = 13000;
const ticket = 250;
const hotel = 500;

const pulMiqdori = usd * hotel + evro * ticket;
const xarajatlar = +prompt("O'zingizdagi pul miqdorini kiriting");

if (pulMiqdori <= xarajatlar) {
    wrapperValeu.textContent = "Oq yo'l Alisher"
} else {
    wrapperValeu.textContent = "Alisher ozgina sabr qilish kerak bo'lar ekan"
}