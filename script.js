// Drive Up Game JavaScript

let orders = [
  {
    id: 1001,
    items: ["Stanley Cup", "Candy", "Phone Charger"],
    status: "Ready for Pickup"
  },
  {
    id: 1002,
    items: ["Shampoo", "Notebook"],
    status: "Preparing"
  }
];

// Display orders
function displayOrders() {
  const orderList = document.getElementById("orderList");

  if (!orderList) return;

  orderList.innerHTML = "";

  orders.forEach(order => {
    const orderBox = document.createElement("div");

    orderBox.className = "order";

    orderBox.innerHTML = `
      <h3>Order #${order.id}</h3>
      <p><strong>Items:</strong> ${order.items.join(", ")}</p>
      <p><strong>Status:</strong> <span id="status-${order.id}">
        ${order.status}
      </span></p>

      <button onclick="startDriveUp(${order.id})">
        I'm Here
      </button>

      <button onclick="cancelOrder(${order.id})">
        Cancel Order
      </button>
    `;

    orderList.appendChild(orderBox);
  });
}

// Customer arrives
function startDriveUp(orderId) {
  const status = document.getElementById(`status-${orderId}`);

  if (!status) return;

  status.textContent = "Drive Up Requested";

  setTimeout(() => {
    status.textContent = "Team Member Is Bringing Your Order";
  }, 3000);

  setTimeout(() => {
    status.textContent = "Order Delivered! 🎉";
  }, 7000);
}

// Cancel an order
function cancelOrder(orderId) {
  const order = orders.find(order => order.id === orderId);

  if (!order) return;

  order.status = "Cancelled";
  displayOrders();
}

// Add a new order
function addOrder() {
  const newOrder = {
    id: Math.floor(Math.random() * 9000) + 1000,
    items: ["Mystery Item", "Snack", "Drink"],
    status: "Preparing"
  };

  orders.push(newOrder);
  displayOrders();
}

// Start the game
displayOrders();
