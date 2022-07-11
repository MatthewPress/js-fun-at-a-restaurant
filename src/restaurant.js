// createRestaurant,

function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}

// addMenuItem,
// Refactor: array.includes()

function addMenuItem(restaurant, menuItem) {

  if (menuItem.type === "breakfast") {
    if (restaurant.menus.breakfast.indexOf(menuItem) < 0) {
      restaurant.menus.breakfast.push(menuItem);
    }
    else {
      return restaurant;
    }
  }

  else if (menuItem.type === "lunch") {
    if (restaurant.menus.lunch.indexOf(menuItem) < 0) {
      restaurant.menus.lunch.push(menuItem);
    }
    else {
      return restaurant;
    }
  }

  else if (menuItem.type === "dinner") {
    if (restaurant.menus.dinner.indexOf(menuItem) < 0) {
      restaurant.menus.dinner.push(menuItem);
    }
    else {
      return restaurant;
    }
  }

}


// removeMenuItem
// Refactor: array.includes()



function removeMenuItem(restaurant, menuItem, menuType) {

  // Iterate through every menuType and menuItem
  // for(var x = 0; x < retraunts.menus[menuType].length; x++) {
  //
  // }

  if (menuType === "breakfast") {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (menuItem === restaurant.menus.breakfast[i].name) {
        restaurant.menus.breakfast.splice(i, 1);
        var result = `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
        return result;
      }
      else {
        continue;
      }
    }
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
  }

  else if (menuType === "lunch") {
    for (var i = 0; i < restaurant.menus.lunch.length; i++) {
      if (menuItem === restaurant.menus.lunch[i].name) {
        restaurant.menus.lunch.splice(i, 1);
        var result = `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
        return result;
      }
      else {
        continue;
      }
    }
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
  }

  else if (menuType === "dinner") {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (menuItem === restaurant.menus.dinner[i].name) {
        restaurant.menus.dinner.splice(i, 1);
        var result = `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
        return result;
      }
      else {
        continue;
      }
    }
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
  }

}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
