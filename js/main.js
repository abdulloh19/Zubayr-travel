const wrapperValeu = document.querySelector(".wrapper");

const pulMiqdori = 8700000;

const xarajatlar = +prompt("O'zingizdagi pul miqdorini kiriting");

if (pulMiqdori <= xarajatlar) {
    wrapperValeu.textContent = "Oq yo'l Alisher"
} else {
    wrapperValeu.textContent = "Alisher ozgina sabr qilish kerak bo'lar ekan"
}