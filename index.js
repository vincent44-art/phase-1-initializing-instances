// Write your code here
// Breakfast Class
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Lunch Class
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Dinner Class with a private property
  class Dinner {
    #dessert; // Declare private field
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert; // Assign private property
    }
  
    // Getter method to access the private dessert property
    getDessert() {
      return this.#dessert;
    }
  }
  
  // Example Instances
  const myBreakfast = new Breakfast("Pancakes", "Coffee");
  console.log(myBreakfast); // Breakfast { food: 'Pancakes', drink: 'Coffee' }
  
  const myLunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
  console.log(myLunch); // Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
  
  const myDinner = new Dinner("Greek Salad", "Minestrone", "Steak", "Cheesecake");
  console.log(myDinner); // Dinner { salad: 'Greek Salad', soup: 'Minestrone', entree: 'Steak' }
  console.log(myDinner.getDessert()); // Cheesecake (accessing private field via getter)  