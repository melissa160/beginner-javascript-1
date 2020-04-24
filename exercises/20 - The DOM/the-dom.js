// Selecting elements and properties

// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading);
// console.dir(heading);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = 'otro contenido';
// console.log(pizzaList.textContent);

// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound(){
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'Cute pup';
// pic.width = 200;
pic.addEventListener('load', function(){
  console.log(pic.naturalWidth);
});

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});