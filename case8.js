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
    totalKeuntungan = totalHargaJual - totalHargaBeli;
  });

  // Rumus Produk Buku Terlaris
  let maxTerjual = 0;
  let bukuTerlaris = null;
  let penulisTerlaris = null;

  dataPenjualanNovel.forEach((produk) => {
    if (produk.totalTerjual > maxTerjual) {
      maxTerjual = produk.totalTerjual;
      bukuTerlaris = produk.namaProduk;
      penulisTerlaris = produk.penulis;
    }
  });

  // Rumus Persentase Keuntungan
  let persentaseKeuntungan = (totalKeuntungan / totalHargaBeli) * 100;

  // Objek Info Penjualan
  const objInfoPenjualan = {};
  objInfoPenjualan.totalKeuntungan = "Rp " + totalKeuntungan;
  objInfoPenjualan.totalModal = "Rp " + totalHargaBeli;
  objInfoPenjualan.produkBukuTerlaris = bukuTerlaris;
  objInfoPenjualan.penulisTerlaris = penulisTerlaris;
  objInfoPenjualan.persentaseKeuntungan = Math.round(persentaseKeuntungan) + "%";

  return objInfoPenjualan;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
