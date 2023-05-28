const openBtn = document.querySelector("#openBtn");
const card = document.querySelector(".card");
const closeBtn = document.querySelector(".closeBtn");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");
const containerForm = document.querySelector(".container-form");

openBtn.addEventListener("click", () => {
  card.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  card.classList.remove("show");
});

registerLink.addEventListener('click', e => {
    e.preventDefault();
    containerForm.classList.add('active');
})

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  containerForm.classList.remove("active");
});



// Function to generate bubbles 
const createBubble = () => {
    const section = document.querySelector(".bubble-background")
    const bubbleEl = document.createElement('span');
    bubbleEl.className = "bubble";
    const minSize = 10;
    const maxSize = 40;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    bubbleEl.style.width = `${size}px`;
    bubbleEl.style.height = `${size}px`;
    bubbleEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(bubbleEl);
}

setInterval(createBubble, 300);