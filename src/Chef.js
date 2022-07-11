//
//   function createRestaurant(name) {
//     var restaurant = {
//       name: name,
//       menus: {
//         breakfast: [],
//         lunch: [],
//         dinner: []
//       }
//     }
//     return restaurant;
//   }
//
//   // addMenuItem,
//   // Refactor: array.includes()
//
//   function addMenuItem(restaurant, menuItem) {
//     if (menuItem.type === "breakfast") {
//       if (restaurant.menus.breakfast.indexOf(menuItem) < 0) {
//         restaurant.menus.breakfast.push(menuItem);
//       }
//       else {
//         return restaurant;
//       }
//     }
//   }
//

// createRestaurant,

class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant; // menus: {breakfast[], lunch[], dinner[]}
  }

  greetCustomer(customerName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${customerName}!`;
    }
    else {
          return `Hello, ${customerName}!`;
    }
  }

  checkForFood(foodItem) {

    if (foodItem.type === "breakfast") {
      for (var i = 0; i < this.restaurant.menus.breakfast.length; i++) {
        if (foodItem.name === this.restaurant.menus.breakfast[i].name) {
          return `Yes, we're serving ${foodItem.name} today!`
        }
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }

    if (foodItem.type === "lunch") {
      for (var i = 0; i < this.restaurant.menus.lunch.length; i++) {
        if (foodItem.name === this.restaurant.menus.lunch[i].name) {
          return `Yes, we're serving ${foodItem.name} today!`
        }
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }

    if (foodItem.type === "dinner") {
      for (var i = 0; i < this.restaurant.menus.dinner.length; i++) {
        if (foodItem.name === this.restaurant.menus.dinner[i].name) {
          return `Yes, we're serving ${foodItem.name} today!`
        }
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}


module.exports = Chef;
