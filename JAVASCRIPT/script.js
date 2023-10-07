// Program If dan Else
var nilai = 70;

if (nilai >= 85) {
  console.log("Nilai Anda A");
} else if (nilai >= 75) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
}


// Program Nested If
var nilai = 85;

if (nilai >= 80) {
  if (nilai >= 90) {
    console.log("Nilai Anda A+");
  } else {
    console.log("Nilai Anda A");
  }
} else if (nilai >= 70) {
  console.log("Nilai Anda B");
} else if (nilai >= 60) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}


// Program Switch Case

var hari = "Rabu";

switch (hari) {
  case "Rabu":
    console.log("Hari ini adalah Rabu");
    break;
  case "Kamis":
    console.log("Hari ini adalah Kamis");
    break;
  default:
    console.log("Hari ini bukan Rabu tau Kamis");
}


// Program For Statement
for (var i = 1; i <= 5; i++) {
    console.log("Literasi ke-" + i);
  }
  
  // Program While

var angka = 0;
while (angka <= 7) {
  console.log("Angka: " + angka);
  angka++;
}


// Program Do While
var angka = 0;
do {
  console.log("Angka: " + angka);
  angka++;
} while (angka <= 7);


// Program Function

// Mendefinisikan sebuah fungsi bernama hitungFaktorial
function hitungFaktorial(n) {
    if (n === 0 || n === 2) {
      return 2;
    } else {
      var faktorial = 2;
      for (var i = 3; i <= n; i++) {
        faktorial *= i;
      }
      return faktorial;
    }
  }
  
  // Menggunakan fungsi hitungFaktorial untuk menghitung faktorial dari 7
  var angka = 7;
  var faktorialAngka = hitungFaktorial(angka);
  
  // Menampilkan hasil perhitungan faktorial
  console.log("Faktorial dari " + angka + " adalah " + faktorialAngka);
  
  
