// const paragraph = document.getElementById("paragraph");
// const paragraph = document.querySelector("#paragraph");
// console.log(paragraph);
// const paragraphId = paragraph.getAttribute("id");
// paragraph.setAttribute("id", "info-paragraph");
// paragraph.id = "info-paragraph";
// console.log(paragraphId);
// console.log(paragraph.id);
// const links = document.getElementsByClassName("link");
// console.log(links);

// const googleLink = document.getElementById("google-link");
// console.log(googleLink);
// googleLink.setAttribute("href", "http://google.com");
// googleLink.setAttribute("target", "_blank");
// // googleLink.removeAttribute("id");
// console.log(googleLink);

// let h2Tag = document.createElement("h2");
// h2Tag.innerHTML = "Elephant";

// console.log(h2Tag);

// document.body.innerHTML =
//   "<h2 id='h2-id'>Hello World</h2> <a href='http://google.com'> google Link </a>";
// document.getElementById("h2-id").addEventListener("click", () => {
//   console.log("clicked");
// });
// const body = document.getElementsByTagName("body")[0];
// console.log(body.children[0]);
// let parent = document.getElementsByTagName("body")[0];
// let h2Tag = document.createElement("h2");
// h2Tag.innerHTML = "h2 tag - Elephant";
// let h1Tag = document.createElement("h1");
// parent.appendChild(h1Tag);
// h1Tag.innerHTML = "Heading 1 - comes before Heading 2";
// parent.insertBefore(h1Tag, h2Tag);
// const p = document.getElementById("paragraph");
// p.insertBefore(h1Tag);
// const text = document.createTextNode("<div> Elephant </div>");
// h2Tag.appendChild(text);
// document.body.appendChild(h2Tag);
// console.log(h2Tag);

// const newNode = document.createElement("span");

// // Get a reference to the parent node
// const parentDiv = document.getElementById("childElement").parentNode;

// // Begin test case [ 1 ] : Existing childElement (all works correctly)
// let sp2 = document.getElementById("childElement");
// newNode.innerHTML = "new node";
// parentDiv.insertBefore(newNode, sp2);
// // End test case [ 1 ]

// // Begin test case [ 2 ] : childElement is of Type undefined
// sp2 = undefined; // Non-existent node of id "childElement"
// parentDiv.insertBefore(newNode, sp2); // Implicit dynamic cast to type Node
// // End test case [ 2 ]

// // Begin test case [ 3 ] : childElement is of Type "undefined" (string)
// sp2 = "undefined"; // Non-existent node of id "childElement"
// parentDiv.insertBefore(newNode, sp2); // Generates "Type Error: Invalid Argument"
// // End test case [ 3 ]

// let h2Tag = document.createElement("h2");
// h2Tag.innerHTML = "h2 tag - Elephant";
// let parent = document.getElementsByTagName("body")[0];
// parent.appendChild(h2Tag);
// let h1Tag = document.createElement("h1");
// h1Tag.innerHTML = "Heading 1 - comes before Heading 2";
// parent.insertBefore(h1Tag, h2Tag);

// let theParagraph = document.getElementById("paragraph");
// parent.removeChild(theParagraph);

// let button = document.getElementById("add-item-button");
// const container = document.getElementById("container");
// let counter = 1;
// button.onclick = function () {
//   console.log("adding an element to the list");
//   const text = document.createTextNode("item -" + counter);
//   container.appendChild(text);
//   counter++;
// };

let sendButton = document.getElementById("send-btn");
// console.log(sendButton);
// // move the input inside the function (this step is optional):
// sendButton.onclick = function () {
//   let input = document.getElementsByTagName("input")[0]; // or leave it as it is, outside
//   console.log(input.value);
//   console.log("clicked");
// };

sendButton.addEventListener("click", () => {
  console.log("clicked");
});

let input = document.getElementsByTagName("input")[0];
console.log(input);
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
