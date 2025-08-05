const flavorSel = document.getElementById("flavor");
const showBtn = document.getElementById("showBtn");
const result = document.getElementById("result");

showBtn.addEventListener('click', () => {
  const flavor = flavorSel.value;
  const toppings = document.querySelectorAll("input[type='checkbox']:checked");
  // console.log(toppings);

  let iceCream = flavor;

  toppings.forEach(topping => {
    iceCream += topping.value;
  })

  result.innerHTML = `Your Ice Cream : ${iceCream}`;
})
