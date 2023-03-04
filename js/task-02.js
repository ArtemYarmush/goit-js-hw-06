const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredients = options => {
  return options.map(option => {
    const liEl = document.createElement('li');
    liEl.textContent = option;
    liEl.classList.add('item');
    return liEl;
  });
};
const elements = createIngredients(ingredients);
document.body.append(...elements);

// ingredients.forEach((element) => {
//   const liEl = document.createElement('li');
//   liEl.textContent = element;
//   liEl.classList.add('item');
  

//   const list = document.querySelector('#ingredients');
// list.appendChild(liEl);
// });

//console.log(list);
// const potatoesLi = document.createElement("li");
// potatoesLi.textContent = 'Potatoes';
// potatoesLi.classList.add("item");

// const mushroomsLi = document.createElement("li");
// mushroomsLi.textContent = 'Mushrooms';
// mushroomsLi.classList.add("item");

// const garlicLi = document.createElement("li");
// garlicLi.textContent = 'Garlic';
// garlicLi.classList.add("item");

// const tomatosLi = document.createElement("li");
// tomatosLi.textContent = 'Tomatos';
// tomatosLi.classList.add("item");

// const herbsLi = document.createElement("li");
// herbsLi.textContent = 'Herbs';
// herbsLi.classList.add("item");

// const condimentsLi = document.createElement("li");
// condimentsLi.textContent = 'Condiments';
// condimentsLi.classList.add("item");

// const addIngredients = document.querySelector('#ingredients');

// addIngredients.append(potatoesLi, mushroomsLi, garlicLi, tomatosLi, herbsLi, condimentsLi);
// // console.log(addIngredients);