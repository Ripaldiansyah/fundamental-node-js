const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = null;
const ipa = 69;

let totalNilai = 0;

const mataPelajaran = [mtk, bahasaIndonesia, bahasaInggris, ipa];

for (const nilai of mataPelajaran) {
  if (nilai == null) {
    console.log("Pastikan semua Nilai telah terisi");
    return;
  }
  totalNilai += nilai;
}

let avg = totalNilai / mataPelajaran.length;
const grade =
  avg >= 90 && avg <= 100
    ? "A"
    : avg >= 80 && avg <= 89
    ? "B"
    : avg >= 70 && avg <= 79
    ? "C"
    : avg >= 60 && avg <= 69
    ? "D"
    : "E";

console.log(`Rata-rata = ${avg} \nGrade ${grade}`);
