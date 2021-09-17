const arkfood = function (harga,voucher, jarak, pajak) {
  
   
  console.log(`harga : ${harga}`);

  const potongan = potonganHarga(harga, voucher);
  console.log(`potongan : ${potongan}`);

  const ongkir = ongkos (jarak);
  console.log(`ongkir : ${ongkir}`);

  const pajakMakanan1 = pajakMakanan (harga, pajak);
  console.log(`pajak : ${pajakMakanan1}`);
  
  console.log(`subtotal : ${ potongan + ongkir + pajakMakanan1}`);
}

const potonganHarga = function (harga,voucher) {

 if (  voucher === 'arkfood5') {
   let diskon1 = 0.5
   let maxHargaDiskon1 = 50000   

   if (harga >= 100000 ) {
       return maxHargaDiskon1;
     } else if( harga >= 50000) {
         return harga * diskon1;
     } else {
       return 0;
     }

 } else if ( voucher === "ditraktirdemy") {
    let maxHargaDiskon2 = 30000
    let diskon2 = 0.6
       if (harga >= 50000 ) {
       return maxHargaDiskon2;
     } else if (harga >= 25000) {
         return harga * diskon2;
     } else {
       return 0;
     }


 } else if (voucher === false) {
   return 'tidak pake kode promo';
 }
};

const ongkos = function  (jarak) {
   let jarakTambahan = jarak - 2
   if (jarak <= 2) {
       return 5000
   } else {
       return jarakTambahan * 3000 + 5000;
   }
};

const pajakMakanan = function (harga, pajak) {
 let persenPajak = 0.05
 if (pajak === true) {
   return harga * persenPajak;
 } else if (pajak === false) {
   return "bebas pajak"
 }
};

arkfood(75000, 'arkfood5', 5, true);


