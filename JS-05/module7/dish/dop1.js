
const list = document.body.firstElementChild;
console.log(list);
const firstLi = list.firstElementChild;
console.log(firstLi);
const categoryNameFirst = firstLi.childNodes[1].textContent;
console.log(`Категория: ${categoryNameFirst}`);
const firstLiUl = firstLi.firstElementChild;
const countFirstLiUl = firstLiUl.childElementCount;
console.log('Количество вложенных li: ', countFirstLiUl);

console.log(firstLi.childNodes[0].textContent);
//const firstUl = list.firstElementChild.firstElementChild.childElementCount;
//console.log('Количество вложенных li: ', firstUl)
//const numOfElements = firstList.children.childElementCount;
//console.log(firstList.children);