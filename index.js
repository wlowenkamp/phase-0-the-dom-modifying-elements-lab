// Write your code here!

let newMain = document.getElementById("main");
newMain.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Will is the champion";
document.body.append(newHeader);
