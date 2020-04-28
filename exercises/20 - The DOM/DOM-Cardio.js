// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const uList = document.createElement('ul');

// add three list items with the words "one, two three" in them
const one = document.createElement('li');
one.textContent = 'one';

const two = document.createElement('li');
two.textContent = 'two';

const three = document.createElement('li');
three.textContent = 'three';

// put that list into the above wrapper
uList.insertAdjacentElement('afterbegin', one);
one.insertAdjacentElement('afterend', two);
two.insertAdjacentElement('afterend', three);


myDiv.insertAdjacentElement('afterbegin',uList);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://picsum.photos/500';

// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
uList.insertAdjacentElement('beforeend', myImage);
// myDiv.appendChild(myImage)

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
  `;

// put this div before the unordered list from above
// const myFragment = document.createRange().createContextualFragment(myHTML);

// myDiv.appendChild(myFragment);

// OTRA FORMA
uList.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
myDiv.querySelectorAll('p')[1].classList.add('warning');

// remove the first paragraph
myDiv.querySelectorAll('p')[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height){
  const playerDiv = document.createElement('div');
  playerDiv.classList.add('playerCard');
  const playerH2 = document.createElement('h2');
  playerH2.textContent = `${name.toUpperCase()} — ${age}`;
  const playerP = document.createElement('p');
  const ageAndDogYears = age * 7;
  playerP.textContent = `They are ${height} and ${age} years old. In Dog years this person would be ${ageAndDogYears}. That would be a tall dog!`;
  playerDiv.insertAdjacentElement('afterbegin', playerH2);
  playerDiv.insertAdjacentElement('beforeend', playerP);
  return document.body.appendChild(playerDiv);
};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const div4 = document.createElement('div');
div4.classList.add('cards');

// Have that function make 4 cards
const card1 = generatePlayerCard('Pedro', 10, 80);
const card2 = generatePlayerCard('Pablo', 11, 80);
const card3 = generatePlayerCard('Meli', 12, 80);
const card4 = generatePlayerCard('Andrea', 13, 80);

// append those cards to the div
div4.insertAdjacentElement('afterbegin', card1);
div4.insertAdjacentElement('afterbegin', card2);
div4.insertAdjacentElement('afterbegin', card3);
div4.insertAdjacentElement('afterbegin', card4);
// put the div into the DOM just before the wrapper element
// document.body.appendChild(div4)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
boton1 = document.createElement('button')
boton1.classList.add('botonDelete')
boton1.textContent = 'delete'

boton2 = document.createElement('button')
boton2.classList.add('botonDelete')
boton2.textContent = 'delete'

boton3 = document.createElement('button')
boton3.classList.add('botonDelete')
boton3.textContent = 'delete'

boton4 = document.createElement('button')
boton4.classList.add('botonDelete')
boton4.textContent = 'delete'

card1.appendChild(boton1)
card2.appendChild(boton2)
card3.appendChild(boton3)
card4.appendChild(boton4)

document.body.appendChild(div4)

// make out delete function
function makeClick(elBoton){
  elBoton.addEventListener('click', function(){
    this.parentElement.remove()
  });
};

// select all the buttons!
// loop over them and attach a listener
const botones = document.querySelectorAll('.botonDelete')
botones.forEach(element => makeClick(element));




