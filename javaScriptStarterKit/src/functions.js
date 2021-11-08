function addToCart(quantity ,productName="Domates") {

    console.log("Sepete Eklendi : " + productName + " adet : " + quantity )
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma" ,3,5)
addToCart2("Armut",5,3)

let product1 = {productName:"Elma", unitPrice:10, quantitiy:5}

function addtocart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.unitPrice)
    console.log("Fiyat : "+product.quantitiy)
}
addtocart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantitiy:5}
let product3 = {productName:"Elma", unitPrice:10, quantitiy:5}
product2 = product3
product2.productName = "Kapuz"
console.log(product3.productName)


function addToCart4(x) {
    console.log(products)
}
let products = [
    {productName:"Elma", unitPrice:10, quantitiy:5},
    {productName:"Armut", unitPrice:10, quantitiy:5},
    {productName:"Kavun", unitPrice:10, quantitiy:5}
]

addToCart4(products)
function add(...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }

console.log(total)
}


add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [300,150,450]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", pupulation:"20M"},
    {name:"marmara", pupulation:"30M"},
    {name:"karadeniz", pupulation:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Rize"],
    ]
]
//console.log(icAnadolu.name);
//console.log(marmara.name);
//console.log(karadeniz.name);
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)