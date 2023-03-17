const dataPenjualanNovel = [
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 50,
    hargaJual: 100,
    totalTerjual: 10,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 50,
    hargaJual: 100,
    totalTerjual: 11,
    sisaStok: 5,
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
