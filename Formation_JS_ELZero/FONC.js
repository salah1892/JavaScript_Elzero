let myNumber = [12, 23, 45, 56, 78, 89];
// let addItself = myNumber.map(function (element, index, arr) {
//   console.log(`Current element: ${element}`);
//   console.log(`Current index : ${index}`);
//   console.log(`Array : ${arr}`);
//   console.log(`This : ${this}`);
//   // return element + element;
// }, 10);
// //console.log(addItself);
// let addItself = myNumber.map((x)=>x+x);
//   console.log(addItself);
//   const numbers = [65, 44, 12, 4];
//   const newArr = numbers.map(myFunction)

//   function myFunction(num) {
//     return num * 10;
//   }
//   console.log(newArr);
// let caracter = "sAlAh EddINNe ELbakKeRRI";
// let changeCaractere = caracter
//   .split("")
//   .map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");
// console.log(changeCaractere);
// let invertedNumber = [1, -10, -20, 15, 100, -30];
// let changeNumber = invertedNumber.map(function (element) {
//   //return element === element > 0 ? element * 1 : element * -1;
//   return -element;
// });
// console.log(invertedNumber);
// console.log(changeNumber);

// let ignoreNumber = "1892Salah Eddinne";
// let deletNumber = ignoreNumber
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele))  ? ele : "";
//   }).join("");
// console.log(deletNumber);
// let friends =["salah","Amir","Ossemma","Hassen","Rami","Zoubeir"];
// let numbers=[11,20,2,5,17,10];
// let checkFriends=friends.filter(function(element){
//     return element.startsWith("Z");
// }
// );
// console.log(friends);
// console.log(checkFriends);

let nums = [10, 20, 15, 30];
let sommeNums = nums.reduce(function (acc, current, index, Array) {
  console.log(`acc :${acc}`);
  console.log(`current :${current}`);
  console.log(`index :${index}`);
  console.log(`Array :${Array}`);
  return acc + current;
});
console.log(sommeNums);
