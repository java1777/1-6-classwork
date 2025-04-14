// let sizeObj = {
//     small: 2500,
//     medium: 4000,
//     large: 6000,
// };

// let extraObj = {
//     cheese: 1000,
//     tomato: 800,
//     free: 1300,
// };

// function orderPizza(size, extra) {
//     let extraPrice = 0;
//     for (let i=0; i<extra.length; i++) {
//         extraPrice+= extraObj[extra[i]];
//     }
//     this.size = size;
//     this.extra = extra;
//     this.price = sizeObj[this.size] + extraPrice;
//     this.time = `${Math.floor(Math.random() * 45) +15} daqiqa`;
// }

// let order = new orderPizza("medium", ["cheese", "tomato"]);
// let order2 = new orderPizza("small", ["cheese", "tomato", "free"]);

// console.log(order);
// console.log(order2);


// 3. Pizza Buyurtma рџЌ•

// javascript
// /* Shart: Pitsa buyurtma qilish funksiyasi tuzing.
// Funksiya pitsa o'lchami va qo'shimchalarni qabul qilsin.
// Narx o'lcham va qo'shimchalarga qarab hisoblansin */

// Test: orderPizza("medium", ["cheese", "tomato"])
// Kutilgan natija:
// {
//     size: "medium",
//     toppings: ["cheese", "tomato"],
//     price: 65000,
//     time: "20 daqiqa"
// }
// 


// Task 4

// function randCommit() {
//     let str = "qwertyuiopasdfghjklzxcvbnm123456789";
//     let commit = "";
//     let saveCommit = [];
//     for (let i = 0; i < 8; i++) {
//         commit+=str[Math.floor(Math.random() * str.length)];
//     }
//     if (!saveCommit.includes(commit)) {
//         saveCommit.push(commit);
//         return commit;
//     } else {
//         return randCommit();
//     }
// }

// console.log(randCommit());
