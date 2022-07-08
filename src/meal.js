// menuItemName

function nameMenuItem(food) {
  return `Delicious ${food}`;
}

// createMenuItem
function createMenuItem(nameMenuItem, price, type) {
  var menuItem = {
    name: nameMenuItem,
    price: price,
    type: type
  };
   return menuItem;
}

// addIngredients

function addIngredients(name, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (name === ingredients[i]) {
      return ingredients;
    }
  }
  return ingredients.push(name);
}

// formatPrice

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

// decreasePrice

function decreasePrice(price) {
  return price * 0.9;
}

// createRecipe

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
