// 1️⃣ Bir array tanımlayalım
let meyveler = ["Elma", "Armut", "Muz"];
console.log("Başlangıç:", meyveler);


// 2️⃣ join() ile her elemanın arasına '-' koy
let birlesmis = meyveler.join("-");
console.log("join ile birleşmiş:", birlesmis);


// 3️⃣ Yeni bir array ile concat() kullan
let sebzeler = ["Domates", "Salatalık"];
let birlesik = meyveler.concat(sebzeler);
console.log("concat sonucu:", birlesik);


// 4️⃣ push() ile yeni eleman ekle
meyveler.push("Çilek");
console.log("push sonrası:", meyveler);


// 5️⃣ pop() ile son elemanı sil
let silinen = meyveler.pop();
console.log("pop sonrası:", meyveler);
console.log("Silinen eleman:", silinen);

