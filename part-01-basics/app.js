// 1️⃣ undefined örneği
let isim;
console.log(isim + 5); // Çıktı: NaN (çünkü undefined + 5 = sayı değil)
console.log(isim);     // Çıktı: undefined


// 2️⃣ null örneği
let yas = null;
console.log(yas + 5);  // Çıktı: 5 (çünkü null sayısal işlemlerde 0 olarak kabul edilir)
console.log(yas);      // Çıktı: null


// 3️⃣ Karşılaştırma farkı
console.log(undefined == null);  // true  → Değer olarak eşit kabul edilir
console.log(undefined === null); // false → Türleri farklı: 
                                 // undefined bir "tanımsız değer",
                                 // null ise "boş değer"dir
