let myElement = document.createElement("div");
let myAttr=document.createAttribute("data-custom");
let myText=document.createTextNode("Product 1");
let myComment=document.createComment("This is Div");
//myAttr.name="salah"
myElement.className="Product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-generat","Generate")
myElement.appendChild(myText)
myElement.appendChild(myComment)
document.body.appendChild(myElement)
console.log(myElement);