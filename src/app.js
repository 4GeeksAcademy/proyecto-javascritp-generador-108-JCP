import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomExcuse(){
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const whoIndexRandom = Math.floor(Math.random()*who.length)
  const actionIndexRandom = Math.floor(Math.random()*action.length)
  const whatIndexRandom = Math.floor(Math.random()*what.length)
  const whenIndexRandom = Math.floor(Math.random()*when.length)

  const excuse = "${who[IndexRandom]} ${action[IndexRandom]} ${what[IndexRandom]} ${when[IndexRandom]}"

  return excuse
}

window.onload = function() {
  const p = document.getElementById("excuse")
  
  p.innerHTML=randomExcuse()
};
