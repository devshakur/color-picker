let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.querySelector(".js-btn");
let page = document.querySelector(".js-page-color");

btn.addEventListener('click', function(){
   let hexColor = '#';
   for (let index = 0; index < 6; index++) {
      hexColor += hex[getRandomNumber()];
      
   }

   page.textContent = hexColor;
   document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
 return  Math.floor(Math.random() * hex.length);
}
