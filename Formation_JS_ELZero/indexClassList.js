let elements = document.getElementById("my-div");
console.log(elements.classList);
console.log(typeof elements.classList);
console.log(elements.classList.item(3));
// elements.onclick = function () {
//   elements.classList.add("add-one", "add-two");
// };
elements.onclick = function () {
    elements.classList.toggle("Salihoviç");
  };
