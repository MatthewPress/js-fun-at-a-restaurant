

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

console.log("checkForFood");

    if (foodItem.type === "breakfast") {
console.log("breakfast");
      for (var i = 0; i < this.menus.breakfast.length; i++) {
console.log("for");
        if (foodItem.name === this.menus.breakfast[i].name) {
console.log("if");
          return `Yes, we're serving ${foodItem.name} today!`
        }
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }

    if (foodItem.type === "lunch") {
console.log("lunch");
      for (var i = 0; i < this.menus.lunch.length; i++) {
        if (foodItem.name === this.menus.lunch[i].name) {
          return `Yes, we're serving ${foodItem.name} today!`
        }
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }

    if (foodItem.type === "dinner") {
console.log("dinner");
      for (var i = 0; i < this.menus.dinner.length; i++) {
        if (foodItem.name === this.menus.dinner[i].name) {
          return `Yes, we're serving ${foodItem.name} today!`
        }
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }

  }

}

module.exports = Chef;
