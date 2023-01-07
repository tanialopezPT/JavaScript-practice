document.querySelector("li").style.background="yellow"

document.querySelector("h1").className="new class name"

document.querySelector('li').classList;


add item:

let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
  console.log("click!!");})

let button = document.getElementById("enter");
let input= sicument.getElementById("userinput");
let ul = document.querySelector("ul");

button.addEventListener("click", function(){
  
  if(input.value.length > 0) {
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(input.value));
          ul.appendChild(li);
          input.value=""; 
  })


  
  
  
  
  
  
  
  
  
  
  
  
  
  

