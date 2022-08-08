let allis = document.querySelectorAll("ul li");
allis.forEach(function (ele) {
  ele.onclick = function () {
    console.log(this);
  };
});
//console.log(allis);
