// const örneği
const sabitDeger = 10;
console.log("Başlangıçta const:", sabitDeger);

// const değerini değiştirmeye çalışalım (HATA ALIRIZ)
// try içinde olmazsa hata olucaktır ve altadaki kodlar çalışmıcaktır.

try {
  sabitDeger = 20; // ❌ Bu satır hata verecek
  console.log("Const değiştirildi:", sabitDeger);
} catch (error) {
  console.error("Const değiştirilemez! ");
}


// let örneği
let degistirilebilirDeger = 5;
console.log("Başlangıçta let:", degistirilebilirDeger);

// let ile değişiklik yapalım (✅ bu geçerli)
degistirilebilirDeger = 15;
console.log("Let değiştirildi:", degistirilebilirDeger);

// Şimdi const’tan sonra let’i yanlış şekilde tanımlayalım
// Yani aynı isimle önce const sonra let kullanmaya çalışalım
try {
  const test = 1;
  console.log("Const test:", test);

  // Aynı değişken ismini let ile tekrar tanımlayalım (❌ Hata verir)
  let test = 2;
  console.log("Let test:", test);
} catch (error) {
  console.error("Aynı isimle const ve let kullanılamaz! Hata:", error.message);
}

