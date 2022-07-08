// takeOrder,

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  }
}

// refundOrder,

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNum === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1);
      // console.log(deliveryOrders.splice(deliveryOrders[i], 1));
    }
    else {
      continue;
    }
  }
}

// listItems,

function listItems(deliveryOrders) {
  var itemsList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemsList.push(deliveryOrders[i].item);
  }
  return itemsList.join(", ");
}

// searchOrder

function searchOrder(deliveryOrders, item) {
  var itemsList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemsList.push(deliveryOrders[i].item);
  }

  var exists = itemsList.indexOf(item);
  if (exists === -1) {
    return false;
  }
  else {
    return true;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
