const add = document.getElementById("add");
const rest = document.getElementById("rest");

add.addEventListener("click", () => {
  let counterProduct = document.getElementById("counterProduct");
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