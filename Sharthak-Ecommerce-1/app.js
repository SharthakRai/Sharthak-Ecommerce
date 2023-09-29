// select sliderWrapper class
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Nintendo Switch",
  },
  {
    id: 2,
    title: "Razer Kishi",
  },
  {
    id: 3,
    title: "Backbone",
  },
  {
    id: 4,
    title: "Steam Deck",
  },
  {
    id: 5,
    title: "PS VITA",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the position of the current product slide to the left 
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product 
    choosenProduct = products[index];

  });
});


// display payment form on click (when the user clicks on the buy button)
const productButton = document.querySelector(".buyButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

// close the payment form on click
close.addEventListener("click", () => {
  payment.style.display = "none";
});
