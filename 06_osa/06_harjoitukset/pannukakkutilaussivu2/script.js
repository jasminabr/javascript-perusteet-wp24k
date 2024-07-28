// Order class
class Order {
  constructor(customerName, pancakeType, toppings, extras) {
    this.customerName = customerName;
    this.pancakeType = pancakeType;
    this.toppings = toppings;
    this.extras = extras;
    this.totalPrice = 0;
    this.isComplete = false;
  }

  calculateTotalPrice() {
    let typePrice = parseInt(this.pancakeType.value);
    let toppingsPrice = this.toppings.reduce(
      (sum, topping) => sum + parseInt(topping.value),
      0
    );
    let extrasPrice = this.extras.reduce(
      (sum, extra) => sum + parseInt(extra.value),
      0
    );
    this.totalPrice = typePrice + toppingsPrice + extrasPrice;
  }

  markAsComplete() {
    this.isComplete = true;
  }
}

// ORDER FORM - CALCULATES AND UPDATES USER ON ORDER PRICE.
const pancakePriceCalc = () => {
  // Pancake price
  let type = document.querySelector("#type");
  let typePrice = parseInt(type.value);
  console.log(`Type price = ${typePrice}€`);

  // Topping price
  let toppings = document.querySelectorAll(
    'input[type="checkbox"][data-type="topping"]:checked'
  );
  let toppingsPrice = 0;
  toppings.forEach((topping) => {
    toppingsPrice += parseInt(topping.value);
  });
  console.log(`Toppings price = ${toppingsPrice}€`);

  // Extra price
  let extras = document.querySelectorAll(
    'input[type="checkbox"][data-type="extra"]:checked'
  );
  let extrasPrice = 0;
  extras.forEach((extra) => {
    extrasPrice += parseInt(extra.value);
  });
  console.log(`Extras price = ${extrasPrice}€`);

  // Total price
  let price = typePrice + toppingsPrice + extrasPrice;
  console.log(`Total price = ${price}€`);

  // Update total price display
  document.querySelector("#total-price").textContent = `Total Price: ${price}€`;
};

// Order management system
let orders = [];

const orderList = document.querySelector("#order-list");

const displayOrders = () => {
  orderList.innerHTML = "";
  orders.forEach((order, index) => {
    const orderHTML = `
      <div class="order">
        <h2>Order by: ${order.customerName}</h2>
        <p>Pancake Type: ${order.pancakeType.text}</p>
        <p>Toppings: ${order.toppings
          .map((topping) => topping.text)
          .join(", ")}</p>
        <p>Extras: ${order.extras.map((extra) => extra.text).join(", ")}</p>
        <p>Total Price: €${order.totalPrice}</p>
        <button class="mark-as-complete" onclick="updateOrderStatus(${index})">Mark as Complete</button>
      </div>
    `;
    orderList.innerHTML += orderHTML;
  });
};

const updateOrderStatus = (orderIndex) => {
  orders[orderIndex].markAsComplete();
  displayOrders();
};

// Call displayOrders when the orders array is populated
displayOrders();

// Add new order
const addOrder = (customerName, pancakeType, toppings, extras) => {
  console.log("Adding new order");
  const newOrder = new Order(customerName, pancakeType, toppings, extras);
  newOrder.calculateTotalPrice();
  orders.push(newOrder);
  displayOrders();
};

// Order form submission
const orderForm = document.querySelector("#order-form");
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const customerName = document.querySelector("#customerName").value;
  const pancakeType = document.querySelector("#type").selectedOptions[0];
  const toppings = [];
  const extras = [];

  // Get selected toppings and extras
  const selectedToppings = document.querySelectorAll(
    'input[type="checkbox"][data-type="topping"]:checked'
  );
  selectedToppings.forEach((topping) => {
    toppings.push({ text: topping.dataset.name, value: topping.value });
  });

  const selectedExtras = document.querySelectorAll(
    'input[type="checkbox"][data-type="extra"]:checked'
  );
  selectedExtras.forEach((extra) => {
    extras.push({ text: extra.dataset.name, value: extra.value });
  });

  addOrder(customerName, pancakeType, toppings, extras);
  pancakePriceCalc();
});

// Update total price on checkbox change
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", pancakePriceCalc);
});

// Update total price on pancake type change
document.querySelector("#type").addEventListener("change", pancakePriceCalc);
