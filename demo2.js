const buku = [
  { judul: "Harry Potter dan Batu Bertuah", pengarang: "J.K. Rowling", tahunTerbit: 1997 },
  { judul: "The Hunger Games", pengarang: "Suzanne Collins", tahunTerbit: 2008 },
  { judul: "To Kill a Mockingbird", pengarang: "Harper Lee", tahunTerbit: 1960 },
];

let totalTahun = 0;

buku.forEach(function (objek) {
  totalTahun += objek.tahunTerbit;
});

console.log("Total tahun terbit: " + totalTahun);
