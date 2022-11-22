// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity= product.querySelector(".quantity input");;
  console.log(price, quantity);
 //traer elementos dom
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;
 //extraer valores
  //... your code goes here
  const subTotalValue = priceValue * quantityValue;
  const subTotal = product.querySelector(".subtotal span");
  //obtener elementos del dom === subtotal
  subTotal.innerText = subTotalValue;
 // JA CAGADA, JA NO SURT :(
  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2^
  let sumTotal = 0;
  const products = document.getElementsByClassName('product');
  for(let i = 0; i < products.length; i++){
    sumTotal += updateSubtotal(products[i]);
  }
  
  

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerText = sumTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
