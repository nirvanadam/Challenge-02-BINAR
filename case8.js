const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let totalHargaJual = 0;
  let totalHargaBeli = 0;

  // Rumus totalHargaJual
  dataPenjualan.forEach(function (buku) {
    totalHargaJual += buku.hargaJual * buku.totalTerjual;
    totalHargaBeli += buku.hargaBeli * (buku.totalTerjual + buku.sisaStok);
    totalKeuntungan = "Rp " + totalHargaJual - totalHargaBeli;
  });

  // // Rumus totalModal
  // dataPenjualan.forEach(function (buku) {
  //   totalModal += buku.hargaBeli * (buku.totalTerjual + buku.sisaStok);
  // });

  // Rumus Produk Buku Terlaris
  let maxTerjual = 0;
  let terlaris = null;

  dataPenjualanNovel.forEach((produk) => {
    if (produk.totalTerjual > maxTerjual) {
      maxTerjual = produk.totalTerjual;
      terlaris = produk.namaProduk;
    }
  });

  // Rumus Penulis Buku Terlaris
  const penulisTerjual = {};
  dataPenjualanNovel.forEach((produk) => {
    if (!penulisTerjual[produk.penulis]) {
      penulisTerjual[produk.penulis] = 0;
    }
    penulisTerjual[produk.penulis] += produk.totalTerjual;
  });
  let maxBukuTerjual = 0;
  let bukuTerlaris = null;
  for (let penulis in penulisTerjual) {
    if (penulisTerjual[penulis] > maxBukuTerjual) {
      maxTerjual = penulisTerjual[penulis];
      bukuTerlaris = penulis;
    }
  }

  // Rumus Presentase Keuntungan
  let persentaseKeuntungan = (totalKeuntungan / totalHargaBeli) * 100;

  // Objek Info Penjualana
  const objInfoPenjualan = {};
  objInfoPenjualan.totalKeuntungan = totalKeuntungan;
  objInfoPenjualan.totalModal = totalHargaBeli;
  objInfoPenjualan.produkBukuTerlaris = terlaris;
  objInfoPenjualan.penulisTerlaris = bukuTerlaris;
  objInfoPenjualan.persentaseKeuntungan = Math.round(persentaseKeuntungan) + "%";

  return objInfoPenjualan;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
