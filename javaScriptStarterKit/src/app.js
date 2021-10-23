console.log("Merhaba") // çalıştırmak için npm run dev yazıyoruz.

console.log("--------------------------------------------------------------")

var wondun = 2.20 //var kullandığımız zaman değişkenleri her zaman değiştirebiliriz.
let dolardun = 9.20 //let aymı köşeli parentez içini okur ona göre değiştirir.
const eurodun = 11.2 //const a değer atadığımız zaman onu değiştiremeyiz.
console.log(dolardun)
console.log("--------------------------------------------------------------")

 let komutKredileri = ["Konut Kredisi", "Araba Kredisi", "Kamu Kredisi"] //camelCasing, PascalCasing
 console.log(komutKredileri)

 console.log("--------------------------------------------------------------")

 for (let i = 0; i < komutKredileri.length; i++) {
     const krediler = komutKredileri[i];
     console.log(krediler)
     
 }