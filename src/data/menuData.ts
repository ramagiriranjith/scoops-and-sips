export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

export interface Addon {
  name: string;
  price: string;
}

export interface CategoryAddons {
  category: string;
  toppings?: {
    title: string;
    items: Addon[];
  };
  sauces?: {
    title: string;
    items: Addon[];
  };
}

export const categories = [
  "All",
  "Waffles",
  "Luxury Crepes",
  "Cookie Dough",
  "Sundaes",
  "Candy Shakes",
  "Luxurious Milkshakes",
  "Custard Puddings",
  "Cheesecakes",
  "Cakes",
  "Pancakes",
  "Matilda Cake",
  "Chocolate Fondue",
  "Brownies",
  "Fresh Chocolate Fruits",
  "Fresh Fruit Platters",
  "Smoothies",
  "Mocktails",
  "Drinks",
  "Classic Donuts"
];

export const categoryAddons: CategoryAddons[] = [
  {
    category: "Pancakes",
    toppings: {
      title: "Toppings (Choose Any 2 Included)",
      items: [
        { name: "Fresh strawberry", price: "Included" },
        { name: "Fresh banana", price: "Included" },
        { name: "Rainbow sprinkles", price: "Included" },
        { name: "Chocolate sprinkles", price: "Included" },
        { name: "Milk chocolate flakes", price: "Included" },
        { name: "White chocolate flakes", price: "Included" },
        { name: "Toffee fudge pieces", price: "Included" },
        { name: "Crushed oreo cookies", price: "Included" },
        { name: "Fresh blueberry", price: "Included" },
        { name: "Fresh raspberry", price: "Included" }
      ]
    }
  },
  {
    category: "Luxury Crepes",
    toppings: {
      title: "Add Extra +£0.99 Each",
      items: [
        { name: "Rainbow sprinkles", price: "+£0.99" },
        { name: "Chocolate sprinkles", price: "+£0.99" },
        { name: "Milk chocolate flakes", price: "+£0.99" },
        { name: "White chocolate flakes", price: "+£0.99" },
        { name: "Toffee fudge pieces", price: "+£0.99" },
        { name: "Crushed oreo cookies", price: "+£0.99" },
        { name: "Fresh blueberry", price: "+£0.99" },
        { name: "Fresh raspberry", price: "+£0.99" }
      ]
    },
    sauces: {
      title: "Add Extra Sauces +£0.99 Each",
      items: [
        { name: "Belgian milk chocolate", price: "+£0.99" },
        { name: "Belgian white chocolate", price: "+£0.99" },
        { name: "Nutella", price: "+£0.99" },
        { name: "Strawberry", price: "+£0.99" },
        { name: "Caramel", price: "+£0.99" },
        { name: "Tropical blue", price: "+£0.99" },
        { name: "Raspberry", price: "+£0.99" }
      ]
    }
  },
  {
    category: "Classic Donuts",
    toppings: {
      title: "Add Extra +£0.89 Each",
      items: [
        { name: "Rainbow sprinkles", price: "+£0.89" },
        { name: "Chocolate sprinkles", price: "+£0.89" },
        { name: "Milk chocolate flakes", price: "+£0.89" },
        { name: "White chocolate flakes", price: "+£0.89" },
        { name: "Toffee fudge pieces", price: "+£0.89" },
        { name: "Crushed oreo cookies", price: "+£0.89" }
      ]
    },
    sauces: {
      title: "Add Extra Sauces +£0.99 Each",
      items: [
        { name: "Belgian milk chocolate", price: "+£0.99" },
        { name: "Belgian white chocolate", price: "+£0.99" },
        { name: "Nutella", price: "+£0.99" },
        { name: "Strawberry", price: "+£0.99" },
        { name: "Caramel", price: "+£0.99" },
        { name: "Tropical blue", price: "+£0.99" },
        { name: "Raspberry", price: "+£0.99" }
      ]
    }
  },
  {
    category: "Cookie Dough",
    toppings: {
      title: "Add Extra +£0.89 Each",
      items: [
        { name: "Rainbow sprinkles", price: "+£0.89" },
        { name: "Chocolate sprinkles", price: "+£0.89" },
        { name: "Milk chocolate flakes", price: "+£0.89" },
        { name: "White chocolate flakes", price: "+£0.89" },
        { name: "Toffee fudge pieces", price: "+£0.89" },
        { name: "Crushed oreo cookies", price: "+£0.89" },
        { name: "Fresh blueberry", price: "+£0.89" },
        { name: "Fresh raspberry", price: "+£0.89" }
      ]
    },
    sauces: {
      title: "Add Extra Sauces +£0.99 Each",
      items: [
        { name: "Belgian milk chocolate", price: "+£0.99" },
        { name: "Belgian white chocolate", price: "+£0.99" },
        { name: "Nutella", price: "+£0.99" },
        { name: "Strawberry", price: "+£0.99" },
        { name: "Caramel", price: "+£0.99" },
        { name: "Tropical blue", price: "+£0.99" },
        { name: "Raspberry", price: "+£0.99" }
      ]
    }
  },
  {
    category: "Waffles",
    toppings: {
      title: "Add Extra +£0.99 Each",
      items: [
        { name: "Fresh strawberry", price: "+£0.99" },
        { name: "Fresh banana", price: "+£0.99" },
        { name: "Rainbow sprinkles", price: "+£0.99" },
        { name: "Chocolate sprinkles", price: "+£0.99" },
        { name: "Milk chocolate flakes", price: "+£0.99" },
        { name: "White chocolate flakes", price: "+£0.99" },
        { name: "Toffee fudge pieces", price: "+£0.99" },
        { name: "Crushed oreo cookies", price: "+£0.99" },
        { name: "Fresh blueberry", price: "+£0.99" },
        { name: "Fresh raspberry", price: "+£0.99" }
      ]
    },
    sauces: {
      title: "Add Extra Sauces +£0.99 Each",
      items: [
        { name: "Belgian milk chocolate", price: "+£0.99" },
        { name: "Belgian white chocolate", price: "+£0.99" },
        { name: "Nutella", price: "+£0.99" },
        { name: "Strawberry", price: "+£0.99" },
        { name: "Caramel", price: "+£0.99" },
        { name: "Tropical blue", price: "+£0.99" },
        { name: "Raspberry", price: "+£0.99" }
      ]
    }
  },
  {
    category: "Sundaes",
    toppings: {
      title: "Add Extra +£0.99 Each",
      items: [
        { name: "Fresh strawberry", price: "+£0.99" },
        { name: "Fresh banana", price: "+£0.99" },
        { name: "Rainbow sprinkles", price: "+£0.99" },
        { name: "Chocolate sprinkles", price: "+£0.99" },
        { name: "Milk chocolate flakes", price: "+£0.99" },
        { name: "White chocolate flakes", price: "+£0.99" },
        { name: "Toffee fudge pieces", price: "+£0.99" },
        { name: "Crushed oreo cookies", price: "+£0.99" },
        { name: "Fresh blueberry", price: "+£0.99" },
        { name: "Fresh raspberry", price: "+£0.99" }
      ]
    },
    sauces: {
      title: "Add Extra Sauces +£0.99 Each",
      items: [
        { name: "Belgian milk chocolate", price: "+£0.99" },
        { name: "Belgian white chocolate", price: "+£0.99" },
        { name: "Nutella", price: "+£0.99" },
        { name: "Strawberry", price: "+£0.99" },
        { name: "Caramel", price: "+£0.99" },
        { name: "Tropical blue", price: "+£0.99" },
        { name: "Raspberry", price: "+£0.99" }
      ]
    }
  },
  {
    category: "Candy Shakes",
    toppings: {
      title: "Add Extra +£0.99 Each",
      items: [
        { name: "Fresh strawberry", price: "+£0.99" },
        { name: "Fresh banana", price: "+£0.99" },
        { name: "Rainbow sprinkles", price: "+£0.99" },
        { name: "Chocolate sprinkles", price: "+£0.99" },
        { name: "Milk chocolate flakes", price: "+£0.99" },
        { name: "White chocolate flakes", price: "+£0.99" },
        { name: "Toffee fudge pieces", price: "+£0.99" },
        { name: "Crushed oreo cookies", price: "+£0.99" },
        { name: "Fresh blueberry", price: "+£0.99" },
        { name: "Fresh raspberry", price: "+£0.99" }
      ]
    },
    sauces: {
      title: "Add Extra Sauces +£0.99 Each",
      items: [
        { name: "Belgian milk chocolate", price: "+£0.99" },
        { name: "Belgian white chocolate", price: "+£0.99" },
        { name: "Nutella", price: "+£0.99" },
        { name: "Strawberry", price: "+£0.99" },
        { name: "Caramel", price: "+£0.99" },
        { name: "Tropical blue", price: "+£0.99" },
        { name: "Raspberry", price: "+£0.99" }
      ]
    }
  },
  {
    category: "Luxurious Milkshakes",
    toppings: {
      title: "Add Extra +£0.99 Each",
      items: [
        { name: "Fresh strawberry", price: "+£0.99" },
        { name: "Fresh banana", price: "+£0.99" },
        { name: "Rainbow sprinkles", price: "+£0.99" },
        { name: "Chocolate sprinkles", price: "+£0.99" },
        { name: "Milk chocolate flakes", price: "+£0.99" },
        { name: "White chocolate flakes", price: "+£0.99" },
        { name: "Toffee fudge pieces", price: "+£0.99" },
        { name: "Crushed oreo cookies", price: "+£0.99" },
        { name: "Fresh blueberry", price: "+£0.99" },
        { name: "Fresh raspberry", price: "+£0.99" }
      ]
    },
    sauces: {
      title: "Add Extra Sauces +£0.99 Each",
      items: [
        { name: "Belgian milk chocolate", price: "+£0.99" },
        { name: "Belgian white chocolate", price: "+£0.99" },
        { name: "Nutella", price: "+£0.99" },
        { name: "Strawberry", price: "+£0.99" },
        { name: "Caramel", price: "+£0.99" },
        { name: "Tropical blue", price: "+£0.99" },
        { name: "Raspberry", price: "+£0.99" }
      ]
    }
  }
];

export const menuItems: MenuItem[] = [
  // Waffles
  { id: "1", name: "Belgian Classic", description: "Traditional waffle with powdered sugar", price: "£6.50", category: "Waffles" },
  { id: "2", name: "Nutella Paradise", description: "Waffle topped with Nutella and banana", price: "£7.50", category: "Waffles" },
  { id: "3", name: "Berry Bliss", description: "Fresh berries, whipped cream, and maple syrup", price: "£8.00", category: "Waffles" },
  { id: "4", name: "Cookies & Cream", description: "Oreo pieces, vanilla ice cream, chocolate sauce", price: "£8.50", category: "Waffles" },
  
  // Luxury Crepes
  { id: "5", name: "Sugar & Lemon", description: "Classic French crepe", price: "£5.50", category: "Luxury Crepes" },
  { id: "6", name: "Chocolate Heaven", description: "Dark chocolate sauce and strawberries", price: "£7.00", category: "Luxury Crepes" },
  { id: "7", name: "Banoffee Dream", description: "Banana, toffee sauce, and whipped cream", price: "£7.50", category: "Luxury Crepes" },
  { id: "8", name: "Berry Burst", description: "Mixed berries with vanilla gelato", price: "£7.50", category: "Luxury Crepes" },
  
  // Cookie Dough
  { id: "9", name: "Classic Cookie Dough", description: "Warm cookie dough with vanilla ice cream", price: "£7.50", category: "Cookie Dough" },
  { id: "10", name: "Chocolate Chip", description: "Cookie dough pieces with chocolate sauce", price: "£8.00", category: "Cookie Dough" },
  { id: "11", name: "Triple Chocolate", description: "Cookie dough with three chocolate sauces", price: "£8.50", category: "Cookie Dough" },
  
  // Sundaes
  { id: "12", name: "Knickerbocker Glory", description: "Layers of fruit, ice cream, and cream", price: "£8.50", category: "Sundaes" },
  { id: "13", name: "Banana Split", description: "Classic sundae with three scoops", price: "£8.00", category: "Sundaes" },
  { id: "14", name: "Brownie Fudge", description: "Warm brownie, chocolate ice cream, hot fudge", price: "£8.00", category: "Sundaes" },
  
  // Candy Shakes
  { id: "15", name: "Skittles Shake", description: "Colorful candy shake with whipped cream", price: "£6.50", category: "Candy Shakes" },
  { id: "16", name: "M&M Delight", description: "M&M candy shake with chocolate drizzle", price: "£6.50", category: "Candy Shakes" },
  { id: "17", name: "Smarties Sensation", description: "Smarties candy shake with sprinkles", price: "£6.50", category: "Candy Shakes" },
  
  // Luxurious Milkshakes
  { id: "18", name: "Vanilla Shake", description: "Classic vanilla milkshake", price: "£5.50", category: "Luxurious Milkshakes" },
  { id: "19", name: "Chocolate Shake", description: "Rich chocolate milkshake", price: "£5.50", category: "Luxurious Milkshakes" },
  { id: "20", name: "Strawberry Shake", description: "Fresh strawberry milkshake", price: "£5.50", category: "Luxurious Milkshakes" },
  { id: "21", name: "Oreo Shake", description: "Cookies and cream milkshake", price: "£6.00", category: "Luxurious Milkshakes" },
  { id: "22", name: "Ferrero Rocher", description: "Hazelnut chocolate milkshake", price: "£6.50", category: "Luxurious Milkshakes" },
  
  // Custard Puddings
  { id: "23", name: "Classic Custard", description: "Traditional creamy custard", price: "£4.50", category: "Custard Puddings" },
  { id: "24", name: "Chocolate Custard", description: "Rich chocolate custard pudding", price: "£4.75", category: "Custard Puddings" },
  
  // Cheesecakes
  { id: "25", name: "New York Cheesecake", description: "Classic creamy cheesecake", price: "£5.50", category: "Cheesecakes" },
  { id: "26", name: "Strawberry Cheesecake", description: "Fresh strawberry topping", price: "£6.00", category: "Cheesecakes" },
  { id: "27", name: "Chocolate Cheesecake", description: "Rich chocolate cheesecake", price: "£6.00", category: "Cheesecakes" },
  
  // Cakes
  { id: "28", name: "Victoria Sponge", description: "Classic British sponge cake", price: "£4.50", category: "Cakes" },
  { id: "29", name: "Chocolate Fudge Cake", description: "Moist chocolate cake with fudge", price: "£5.00", category: "Cakes" },
  { id: "30", name: "Carrot Cake", description: "Spiced carrot cake with cream cheese frosting", price: "£5.00", category: "Cakes" },
  
  // Pancakes
  { id: "31", name: "American Stack", description: "Fluffy pancakes with maple syrup", price: "£6.50", category: "Pancakes" },
  { id: "32", name: "Nutella Pancakes", description: "Pancakes with Nutella and banana", price: "£7.50", category: "Pancakes" },
  { id: "33", name: "Berry Pancakes", description: "Fresh berries and whipped cream", price: "£7.50", category: "Pancakes" },
  
  // Matilda Cake
  { id: "34", name: "Matilda Chocolate Cake", description: "Famous chocolate cake from Matilda", price: "£6.00", category: "Matilda Cake" },
  
  // Chocolate Fondue
  { id: "35", name: "Classic Fondue", description: "Melted chocolate with fresh fruit", price: "£8.50", category: "Chocolate Fondue" },
  { id: "36", name: "White Chocolate Fondue", description: "White chocolate with strawberries", price: "£8.50", category: "Chocolate Fondue" },
  
  // Brownies
  { id: "37", name: "Classic Brownie", description: "Rich chocolate brownie", price: "£4.50", category: "Brownies" },
  { id: "38", name: "Brownie Sundae", description: "Warm brownie with ice cream", price: "£6.50", category: "Brownies" },
  
  // Fresh Chocolate Fruits
  { id: "39", name: "Chocolate Strawberries", description: "Fresh strawberries dipped in chocolate", price: "£5.50", category: "Fresh Chocolate Fruits" },
  { id: "40", name: "Mixed Chocolate Fruits", description: "Assorted fruits with chocolate coating", price: "£6.50", category: "Fresh Chocolate Fruits" },
  
  // Fresh Fruit Platters
  { id: "41", name: "Seasonal Fruit Platter", description: "Fresh seasonal fruits", price: "£6.00", category: "Fresh Fruit Platters" },
  { id: "42", name: "Tropical Platter", description: "Exotic tropical fruits", price: "£6.50", category: "Fresh Fruit Platters" },
  
  // Smoothies
  { id: "43", name: "Berry Smoothie", description: "Mixed berry smoothie", price: "£4.50", category: "Smoothies" },
  { id: "44", name: "Mango Smoothie", description: "Fresh mango smoothie", price: "£4.50", category: "Smoothies" },
  { id: "45", name: "Green Smoothie", description: "Healthy green smoothie", price: "£4.75", category: "Smoothies" },
  
  // Mocktails
  { id: "46", name: "Virgin Mojito", description: "Refreshing mint mocktail", price: "£4.50", category: "Mocktails" },
  { id: "47", name: "Strawberry Daiquiri", description: "Sweet strawberry mocktail", price: "£4.75", category: "Mocktails" },
  { id: "48", name: "Pina Colada", description: "Tropical coconut and pineapple", price: "£4.75", category: "Mocktails" },
  
  // Drinks
  { id: "49", name: "Espresso", description: "Double shot Italian espresso", price: "£2.50", category: "Drinks" },
  { id: "50", name: "Cappuccino", description: "Classic cappuccino", price: "£3.50", category: "Drinks" },
  { id: "51", name: "Latte", description: "Smooth caffe latte", price: "£3.75", category: "Drinks" },
  { id: "52", name: "Hot Chocolate", description: "Belgian chocolate hot drink", price: "£4.00", category: "Drinks" },
  { id: "53", name: "Fresh Juice", description: "Orange or apple juice", price: "£3.50", category: "Drinks" },
  
  // Classic Donuts
  { id: "54", name: "Glazed Donut", description: "Classic glazed ring donut", price: "£3.50", category: "Classic Donuts" },
  { id: "55", name: "Chocolate Donut", description: "Chocolate glazed donut", price: "£3.75", category: "Classic Donuts" },
  { id: "56", name: "Strawberry Donut", description: "Strawberry frosted donut", price: "£3.75", category: "Classic Donuts" },
];
