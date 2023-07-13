const add = document.getElementById("add");
const rest = document.getElementById("rest");
let counterProduct = document.getElementById("counterProduct");
let bodyCart = document.getElementById("bodyCart");
let productNumber = document.getElementById("productNumber");
let checkout = document.getElementById("checkout");

add.addEventListener("click", () => {
  let valueNumber = parseInt(counterProduct.value);

  if (isNaN(valueNumber)) {
    valueNumber = 0;
  }
  counterProduct.value = valueNumber + 1;
});
rest.addEventListener("click", () => {
  let counterProduct = document.getElementById("counterProduct");
  let valueNumber = parseInt(counterProduct.value);

  counterProduct.value = valueNumber - 1;
});

cart.addEventListener("click", () => {
  if (bodyCart.style.display === "none") {
    bodyCart.style.display = "flex";
  } else {
    bodyCart.style.display = "none";
  }
});

checkout.addEventListener("click", (e) => {
  e.preventDefault(e);
  productNumber.value = counterProduct.value;
});
