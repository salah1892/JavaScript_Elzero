//object
// let user = {
//   theName: "Salah",
//   theAge: 28,
//   skills: ["Java", "C++", "C#"],
//   available: true,

//   adress: {
//     swizerland: "zurich",
//     tunisia: {
//       oneAdrees: "bazma",
//       twoAdrees: "Mestir",
//     },
//   },
//   checkAvailibilty: function () {
//     return this.available === true ? "Free for work" : "Not Free for work";
//   },
//   sayHello: function () {
//     console.log(`Hello ${this.theName}`);
//   },
// };
// console.log(user.checkAvailibilty());
// //user.sayHello();
// console.log(user["adress"]);
// console.log(this)
// document.getElementById("btnWindows").onclick=function(){
//      console.log(this)
// }
//////////////////////////////////////////////////////
// let user = {
//   theName: "Salah",
//   theAge: 28,
//   doubleAge: function () {
//     return this.theAge * 2;
//   },
// };

// let obj=Object.create(user)
// //obj.num=2021;
// obj.theAge=30
// console.log(obj.theName)
// console.log(obj.theAge)
// console.log(obj.doubleAge())
//////////////////////////////////////////////////////
let obj1 = {
  prop1: 1,
  method1: function () {
    return this.prop1;
  },
};
let obj2 = {
  prop2: 2,
  method2: function () {
    return this.prop2;
  },
};
let targetObjects = {
  prop1: 1,
  prop3: 3,
};
let finalObject = Object.assign(targetObjects, obj1);
console.log(finalObject);
