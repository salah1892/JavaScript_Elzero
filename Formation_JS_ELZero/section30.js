// let nam =["salah","Eddinne","Elbakkerri"];
// console.log(nam.length)
// nam.unshift("hello")
// console.log(nam)
// nam.push("eldeler")
// console.log(nam)
// let tab=[10,"salah","1993",-45,"21/01",true,102.23,false];
// console.log(tab)
// console.log(tab.sort())
// console.log(tab.reverse())
// var banana = 'yellow';
// var apple = 'red';
// if (apple === 'red') {
//      var banana = 'black';    // la portée est globale
//      var apple = 'green';       // la portée est à l'intérieur du bloc if
//      console.log( banana);    // black
//      console.log(apple);     // green
// }
// console.log( banana);    // black
// console.log( apple);

// for(let i=0;i<10;++i){
//     console.log(i)
// }

// let tab = [10, "salah", "1993", -45, "21/01", true, 102.23, false];
// for (let i = 0; i < tab.length; ++i) {
//   if (typeof tab[i] === "string") {
//     break;
//   }
//   console.log(tab[i]);
// }
// let nom=["salah","oussama","wadi","hamza"];
// let ville=["monastir","bazma","bouzid"]
// mainloop:for (let i = 0; i < nom.length; ++i) {
//     console.log(nom[i]);
//     nestedloop:for (let i = 0; i < ville.length; ++i) {
//         if(ville[i]==='bouzid'){
//             break nestedloop;
//         }
//         console.log(`->${ville[i]}`);
//     }

// }
let products=["Keyboard","Mouse","Pen","Pad","Monitor","IPhone"];
let colors=["Red","Green","Blue"];
let showCount=5;
document.write(`<h1>show ${showCount} products</h1>`)
 for (let i = 0; i < products.length; ++i) {
    document.write(`<div>`)
    document.write(`<h2>products [${i+1}] : ${products[i]} </h2>`)
    for (let j = 0; j < colors.length; ++j) {
        document.write(`<h5>    -> colors [${j+1}] : ${colors[j]} </h5>`)
    }
    document.write(`</div>`)
}













