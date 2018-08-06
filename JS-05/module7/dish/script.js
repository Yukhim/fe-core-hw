// 'use strict';
const dishes = [
  {
    name: "Baked Yak & Mushrooms",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Beatae sint quasi quo exercitationem vel ea distinctio. Quae eveniet porro aspernatur debitis eos accusamus est harum.",
    price: "61.00",
    available: true
  },
  {
    name: "Roasted Oysters",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Consequatur maiores eos sunt ea commodi laboriosam. Esse est et quia voluptatem voluptatem quia deleniti et ut.",
    price: "32.00",
    available: false
  },
  {
    name: "Strawberry Pancakes",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Aut tenetur ipsa. Ex voluptate qui aut porro numquam voluptas autem.",
    price: "21.00",
    available: true
  },
  {
    name: "Caramel Toffee",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Eum fuga sequi earum voluptas voluptas necessitatibus ut. Labore animi sed maxime animi quia eum magnam et provident.",
    price: "33.00",
    available: false
  },
  {
    name: "Strawberry Pancakes",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Dolores sed vero voluptatem voluptatem architecto officiis praesentium. Dolores quasi facere incidunt sint eos omnis delectus officia.",
    price: "14.00",
    available: false
  },
  {
    name: "Caramel Toffee",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Ea eveniet vel omnis veniam et perspiciatis quod doloribus voluptas. Autem at est molestiae repellendus.",
    price: "84.00",
    available: true
  },
  {
    name: "Roasted Orange",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Deserunt quas nostrum qui qui sunt qui dolores. Culpa facere et voluptatem nobis laudantium aperiam aliquid.",
    price: "63.00",
    available: true
  },
  {
    name: "Pistachio Elderberry Wafer",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Optio ut eum necessitatibus dolores molestias. Tenetur libero harum nobis a est et voluptatem rerum officia.",
    price: "67.00",
    available: false
  },
  {
    name: "Chocolate Pie",
    image: "http://lorempixel.com/640/480/food",
    descr:
      "Et cum et ut quis quas maiores consequatur. Iure qui unde sint consequatur qui iusto at sit.",
    price: "26.00",
    available: false
  }
];

const createCardContent = (name, description) => {
  const content = document.createElement("div");
  content.classList.add("content");

  const title = document.createElement("h2");
  title.classList.add("name");
  title.textContent = name;

  const descr = document.createElement("p");
  title.classList.add("descr");
  descr.textContent = description;

  content.append(title, descr);

  return content;
};

const createFooter = (price, available) => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const rate = document.createElement("p");
  rate.classList.add("price");
  rate.textContent = `Price ${price}$`;

  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.hidden = !available;
  btn.textContent = "Add to order";
  
  footer.append(rate, btn);
  return footer;
};

const soldOut = (available)=>{
  if(available) return null;

  const sold = document.createElement("p");
  sold.classList.add("sold-out");
  sold.textContent = "Sold Out!";

  return sold;
};


const createCard= ({name, image, descr, price, available})=>{
  const card = document.createElement("div");
  card.classList.add("card");
  
  const img = document.createElement("img");
  img.classList.add("img");
  img.setAttribute("src", image);
  img.setAttribute("alt", "picture");
  img.setAttribute("width", "200");

  const content = createCardContent(name, descr);
  const footer = createFooter(price, available);
  const sold = soldOut(available);
  content.appendChild(footer);

  card.append(img, content, sold);

  return card;
};



const createCards = (dishes)=>{
  const elements = dishes.map(dish => createCard(dish));
  return elements;
};

console.log(createCards(dishes));
const cards = createCards(dishes);
const grid = document.querySelector(".dish-grid");

grid.append(...cards);
