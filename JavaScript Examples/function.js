var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' pizza ' + topping);
  orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('topped with bacon', 'thin crust');
takeOrder('topped with bacon', 'thin crust');
takeOrder('topped with bacon', 'thin crust');

console.log(getSubTotal(orderCount));
console.log(getTotal());
