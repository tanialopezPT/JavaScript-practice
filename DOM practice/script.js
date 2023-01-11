// let clickMe= document.querySelector('body').style.background="gray";


let button= document.querySelector('button');
let ul = document.querySelector('ul')

document.querySelector('button').addEventListener('click', addListItem);

function addListItem(){
  let answer= document.querySelector('#input').value;
  document.querySelector('h1').textContent= answer;
  

}












