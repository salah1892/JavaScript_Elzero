let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraphe = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myDescriptionText = document.createTextNode("Product Description");
for (let i = 0; i < 50; i++) {
  //Add Heading Text
  myHeading.appendChild(`${myHeadingText}`);
  //Add Heading To MainElement
  myMainElement.appendChild(`${myHeading} `);
  //Add Heading Paragraphe
  myParagraphe.appendChild(`${myDescriptionText}`);
  //Add Heading To MainElement
  myMainElement.appendChild(`${myParagraphe}`);
}

myMainElement.className = "product";
document.body.appendChild(myMainElement);
