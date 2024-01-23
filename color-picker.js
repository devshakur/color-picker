const colors = ['red', 'pink', 'green', 'yellow', 'brown', 'orange', 'grey', 'white', 'purple',  'rgb(61, 207, 207)',  'rgb(5, 9, 6)']

let page = document.querySelector('.js-page-color');
let btnClick = document.querySelector('.js-btn');

btnClick.addEventListener('click', function(){
  const randomColor = getRandomNumbers();
  

  document.body.style.backgroundColor = colors[randomColor];
  page.textContent = colors[randomColor];
})

function getRandomNumbers(){
  return Math.floor(Math.random()* colors.length);   
}
