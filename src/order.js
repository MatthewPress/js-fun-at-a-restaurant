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
    if (deliveryOrders[i].item === item) {
      return true;
    }
  }
  return false;

  // Different Solution
    // var itemsList = [];
    // for (var i = 0; i < deliveryOrders.length; i++) {
    //   itemsList.push(deliveryOrders[i].item);
    // }
    //
    // if (itemsList.indexOf(item) === -1) {
    //   return false;
    // }
    // else {
    //   return true;
    // }

}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
