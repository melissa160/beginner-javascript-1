const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods
console.table(people)
console.error(people[0].name)
console.warn(people[1].name)

// // Tiene sentido dentro de una funcion, cuenta las veces que se envia el mismo string
function doctorize1(name) {
  console.count(`running Doctorize for ${name}`)
  return `Dr. ${name}`;
}

// // Agrupar muchos console logs
function doALotOffStuff(){
  console.group('Doing many logs')
  console.log('first')
  console.log('second')
  console.groupEnd('Doing many logs')
}


// Callstack or stacktrace

// Grabbing Elements
// // Desde el inspector para desarrolladores de chrome, seleccionar un elemento, ej un boton, luego7
// // ir a la consola y poner $0 para que te retorne el elemento que habias seleccionado es un shorcut
// // para seleccionar elementos. $1 seria el elemento anterior seleccionado y $2 el mas anterior y asi sucesivament

// Breakpoints
// // debugger

// Scope

// Network Requests
// // Network tab in devtools chrome

// Break On Attribute
// // Se selecciona el elemento, click derecho Break on, nos permitiria ver desde que archivo js se llama la accion del elemento

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
