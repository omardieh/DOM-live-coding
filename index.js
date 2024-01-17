// function addElement() {
//   // select the body :
//   const body = document.getElementsByTagName("body")[0];

//   // create a new html element
//   const h1 = document.createElement("h1");

//   // create a text node
//   const text = document.createTextNode("Hello World from JS DOM!");

//   // add the text node to the h1 tag
//   h1.appendChild(text);

//   // add the h1 to the body
//   body.appendChild(h1);
// }
// addElement();

// let theCatDiv = document.getElementById("cat");
// theCatDiv.innerHTML = "I'm a cat";
// theCatDiv.style.backgroundColor = "red";
// theCatDiv.style.border = "2px green solid";
// theCatDiv.style.fontSize = "50px";
// theCatDiv.style.marginTop = "30px";
// theCatDiv.style.paddingBottom = "30px";

// let mice = document.getElementsByClassName("mouse");
// // console.log(mice.length);
// [...mice].forEach((mouse) => {
//   console.log(mouse);
// });

// let divs = document.getElementsByTagName("div");
// console.log(divs);

// const cat = document.querySelector("section");
// const cat = document.querySelector("#cat");
// const cat = document.querySelector(".cat-class");
// console.log(cat);

// const divs = document.querySelectorAll("div");
// console.log(divs);
// divs.forEach((div) => {
//   div.style.width = "10px";
//   div.style.height = "10px";
//   div.style.margin = "10px";
//   div.style.backgroundColor = "yellow";
// });

// const cat = document.querySelector("#cat");
// // cat.className = "updated-cat-className";
// cat.classList.add("another-cat-className");
// cat.classList.remove("cat-class");
// console.log(cat);
const cat = document.querySelector(".cat-class");
console.log(cat.id);
cat.id = "new-cat-id";
