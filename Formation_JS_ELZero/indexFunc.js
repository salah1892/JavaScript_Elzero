let element=document.getElementById("my-div");
let createdP=document.createElement("p");
// element.before("Bonjour Salihoviç");
// element.prepend(createdP);
// element.after("Bonjour Salihoviç");
// element.append(createdP);
//-------------------------------------//
let myDiv=document.querySelector("my-div");
let myP=document.querySelector("p").cloneNode(true);
myDiv.appendChild(myP)
