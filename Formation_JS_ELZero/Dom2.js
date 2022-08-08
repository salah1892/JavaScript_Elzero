console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) {
  console.log(myP.hasAttribute("data-src"));
}
