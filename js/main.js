// const wrapperValeu = document.querySelector(".wrapper");

// const usd = 11000;
// const evro = 13000;
// const ticket = 250;
// const hotel = 500;

// alert(`
//     Mehmonxona xarajati uchun: $${hotel};
//     Bilet narhi uchun: $${ticket}
// `)

// const pulMiqdori = usd * hotel + evro * ticket;
// const xarajatlar = +prompt("O'zingizdagi pul miqdorini kiriting");

// if (pulMiqdori <= xarajatlar) {
//     wrapperValeu.textContent = "Oq yo'l Zubayr"
// } else {
//     wrapperValeu.textContent = "Zubayr ozgina sabr qilish kerak bo'lar ekan"
// };

const sum = document.querySelector(".work")

const wrapperConst = 1 && 2 && 3 && 4 && 5;
const work = 6 && 7;

const promptNumber = +prompt("1 dan 7 gacha bo'lgan sonni kiriting");

if (wrapperConst >= promptNumber) {
    sum.textContent = "Bugun sizning ish kuningiz"
} else if (work >= promptNumber) {
    sum.textContent = "Bugun sizning dam olish kuningiz"
}






