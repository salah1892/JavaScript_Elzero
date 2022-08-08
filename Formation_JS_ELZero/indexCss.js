let element = document.getElementById("my-div");

element.style.cssText = "font-weight:bold;color:red;opacity:0.9";
element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");
document.styleSheets[0].rules[0].style.setProperty("Background-color", "green");

