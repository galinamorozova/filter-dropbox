
// выводим список городов по нажатию кнопки и убираем его по повторному нажатию
let button = document.querySelector('button');
let cities = document.querySelectorAll('.city');

function visible() {
  for (let i = 0; i < cities.length; i ++){
  cities[i].style.visibility = 'visible';
    };
  button.removeEventListener('click', visible);
  button.addEventListener('click', hidden);
};

function hidden(){
  for (let i = 0; i < cities.length; i ++){
    cities[i].style.visibility = 'hidden';
      };
  button.removeEventListener('click', hidden);
  button.addEventListener('click', visible);
 
}

button.addEventListener('click', visible);
button.addEventListener('click', hidden);

//смена окошка на поле ввода и обратно
let container = document.querySelector('.container');
let input = document.querySelector('.filteration');
let evthgElse = document.querySelector('body');

container.addEventListener('click', function changeOnInput() {
  container.style.visibility = 'hidden';
  input.style.visibility = 'visible';
  input.focus();
  event.stopPropagation();
});

function vs () {
  container.style.visibility = 'visible';
  input.style.visibility = 'hidden'; 
};

evthgElse.addEventListener('click', vs, true);



//фильтрация
function getFilter() {

  //прячем общий список городов при начале ввода c клавиатуры//
  hidden();

//формируем массив из названий городов//
  let arr = [];
  for (i = 0; i < cities.length; i++) {
    arr.push(cities[i].innerHTML);
  };

  //получаем значение вводимого//
  let letters = input.value;


  //сортируем получившийся массив по значению вводимого c условием не менее 2х символов
  const filteredArray = filtered(letters);
  if (filtered(letters).length > 2) return filteredArray;

  function filtered (letters) {
    return arr.filter( function filteredAll(town) {
     return town.toLowerCase().indexOf(letters.toLowerCase()) > -1;
 });
};

input.addEventListener('keyup', getFilter);

// создаем из вводимого список
const inputCities = document.querySelector('.inputCities');
for (let i = 0; i < filteredArray.length; i++) {
  inputCities.innerHTML += `<li class ="inputCities">${filteredArray[i]}</li>`;
 }
};   

//убираем список по backspace
function clear(event) {
  if (event.code == 'Backspace') {
    for (let i = 0; i < inputCities.length; i ++){
      inputCities[i].style.visibility = 'hidden';
        };
  } 
  input.addEventListener('keyup', getFilter);
};

document.addEventListener('keyup', clear);


// вводим каждый город в окошко по нажатию на него

let inputCities = document.querySelectorAll('.inputCities');

cities.forEach((city) => city.addEventListener('click', insertCity));
inputCities.forEach((city) => city.addEventListener('click', insertCity));

function insertCity(city) {
   container.innerHTML =  city.target.innerHTML;
   for (let i = 0; i < cities.length; i ++){
    cities[i].style.visibility = 'hidden';
      };
};