const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const createPostCard = function({img, title, text, link}){
  const card = document.createElement('div')
  card.classList.add('post');
  const image = document.createElement('img');
  image.classList.add('post__image');
  image.setAttribute('src', img);
  image.setAttribute('alt', 'post image');
  const header = document.createElement("h2");
  header.classList.add('post__title');
  header.textContent = title;
  const paragraph = document.createElement('p');
  paragraph.classList.add('post__text');
  paragraph.textContent = text;
  const btn = document.createElement('button');
  btn.classList.add("button");
  btn.setAttribute("href", link);
  btn.textContent = "Read more";
  card.append(image, header, paragraph, btn);

  return card;
}

const createCards = (posts)=>{
  const elements = posts.map(post=> createPostCard(post));
  return elements;
}

const myCards = document.querySelector('.my_card');
const cards = createCards(posts);

myCards.append(...cards);
