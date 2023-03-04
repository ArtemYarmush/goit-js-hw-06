const categories = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, categories.length);
categories.forEach(element => {
    const titleEl = element.firstElementChild;
    const numberLiEl = element.lastElementChild.children;
    console.log('Category:' , titleEl.textContent);
    console.log('Elements:' , numberLiEl.length);
});


// const categoriesRef = document.querySelectorAll('li.item');

// const numberOfCategoriesRef = categoriesRef.length;

// console.log(`Number of categories: ${numberOfCategoriesRef}`);

// const categoryRef = categoriesRef.forEach(el => {
//     const category = el.firstElementChild.textContent;
//     const elements = el.lastElementChild.children.length;
//     console.log(`Category: ${category} 
// Elements: ${elements}`)
// });