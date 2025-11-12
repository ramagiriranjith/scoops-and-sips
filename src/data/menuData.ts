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
  "Gelato Milkshakes",
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
    sauces: {
      title: "Sauces (Choose any 2 +£7.89)",
      items: [
        { name: "Belgian milk chocolate", price: "+£7.89" },
        { name: "Belgian white chocolate", price: "+£7.89" },
        { name: "Nutella", price: "+£7.89" },
        { name: "Strawberry", price: "+£7.89" },
        { name: "Caramel", price: "+£7.89" },
        { name: "Tropical blue", price: "+£7.89" },
        { name: "Raspberry", price: "+£7.89" }
      ]
    },
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
  // // {
  // //   category: "Sundaes",
  // //   toppings: {
  // //     title: "Add Extra +£0.99 Each",
  // //     items: [
  // //       { name: "Fresh strawberry", price: "+£0.99" },
  // //       { name: "Fresh banana", price: "+£0.99" },
  // //       { name: "Rainbow sprinkles", price: "+£0.99" },
  // //       { name: "Chocolate sprinkles", price: "+£0.99" },
  // //       { name: "Milk chocolate flakes", price: "+£0.99" },
  // //       { name: "White chocolate flakes", price: "+£0.99" },
  // //       { name: "Toffee fudge pieces", price: "+£0.99" },
  // //       { name: "Crushed oreo cookies", price: "+£0.99" },
  // //       { name: "Fresh blueberry", price: "+£0.99" },
  // //       { name: "Fresh raspberry", price: "+£0.99" }
  // //     ]
  // //   },
  // //   sauces: {
  // //     title: "Add Extra Sauces +£0.99 Each",
  // //     items: [
  // //       { name: "Belgian milk chocolate", price: "+£0.99" },
  // //       { name: "Belgian white chocolate", price: "+£0.99" },
  // //       { name: "Nutella", price: "+£0.99" },
  // //       { name: "Strawberry", price: "+£0.99" },
  // //       { name: "Caramel", price: "+£0.99" },
  // //       { name: "Tropical blue", price: "+£0.99" },
  // //       { name: "Raspberry", price: "+£0.99" }
  // //     ]
  // //   }
  // },
  {
    category: "Gelato Milkshakes",
    toppings: {
      title: "Choose any two flavour",
      items: [
        { name: "Kinder Bueno", price: "£5.29" },
        { name: "Ferrero Rocher", price: "£5.29" },
        { name: "Snickers", price: "£5.29" },
        { name: "Oreo", price: "£5.29" },
        { name: "Red Velvet", price: "£5.29" },
        { name: "Raspberry Cheesecake", price: "£5.29" },
        { name: "Biscoff", price: "£5.29" },
        { name: "Salted Caramel", price: "£5.29" },
        { name: "Pistachio", price: "£5.29" },
        { name: "Mint Chocolate Chip", price: "£5.29" },
        { name: "Strawberry", price: "£5.29" },
        { name: "Mango", price: "£5.29" },
        { name: "Bubble Gum ", price: "£5.29" },
        { name: "Vanilla", price: "£5.29" },
        { name: "Chocolate", price: "£5.29" },
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
  { id: "1", name: "Banofee Waffle", description: "Fresh hot waffle topped with sliced banana pieces & drizzled with our toffee sauce ", price: "£6.99", category: "Waffles" },
  { id: "2", name: "Straberry Waffle", description: "Fresh hot waffle topped with sliced strawberry pieces & drizzled with our belgian milk chocolate sauce ", price: "£6.99", category: "Waffles" },
  { id: "3", name: "Straberry & Banana Waffle", description: "Fresh hot waffle topped with sliced banana pieces, sliced strawberry pieces & drizzled with our belgian milk chocolate sauce.", price: "£7.25", category: "Waffles" },
  { id: "4", name: "Oreo Cookie Waffle", description: "Fresh hot waffle topped with crushed oreo cookies & drizzled with our belgian milk and belgian white chocolate sauce. ", price: "£7.25", category: "Waffles" },
  { id: "5", name: "Kinder Bueno Waffle", description: "Fresh hot waffle topped with sliced kinder bueno chocolate & drizzled with our belgian milk chocolate and belgian white chocolate sauce ", price: "£7.25", category: "Waffles" },
  { id: "6", name: "White Chocolate & Straberry Waffle", description: "Fresh hot waffle topped with sliced strawberry pieces & drizzled with our belgian white chocolate sauce. ", price: "£7.25", category: "Waffles" },
  { id: "7", name: "Nutty Ferrero Rocher Waffle", description: "Fresh hot waffle topped with choped hazelnut pieces, ferrero rocher chocolate & drizzled with nuttela sauce. ", price: "£8.25", category: "Waffles" },
  { id: "8", name: "Maple Syrup Waffle", description: "Fresh hot waffle sprinkled with cinnamon & served with a shot of original luxury canadian maple syrup.", price: "£7.25", category: "Waffles" },
  { id: "9", name: "Biscoff Waffle", description: "Fresh hot waffle topped with sliced banana pieces, crumbled biscoff pieces & drizzled with our Biscoff sauce", price: "£7.25", category: "Waffles" },
  { id: "10", name: "Brownie Waffle", description: "Fresh hot waffle topped with double chocolate brownie, sliced banana & strawberry pieces,drizzled with our luxury belgian milk chocolate sauce.", price: "£8.25", category: "Waffles" },
  { id: "11", name: "Raspberry and Blueberry", description: "Fresh hot waffle topped with fresh raspberry and blueberry drizzled with our luxury belgian white chocolate sauce", price: "£8.25", category: "Waffles" },
  { id: "12", name: "Banana and Chocolate", description: "Fresh hot waffle topped with fresh banana and drizzled with our luxury belgian milk chocolate sauce", price: "£7.25", category: "Waffles" },
  // Luxury Crepes
  { id: "13", name: "Banofee Crepe", description: "Freshly cooked crepe topped with sliced banana pieces & drizzled with our toffee sauce", price: "£7.99", category: "Luxury Crepes" },
  { id: "14", name: "Strawberry and Chocolate Crepe", description: "Freshly cooked crepe topped with sliced strawberry pieces & drizzled with our belgian milk chocolate sauce", price: "£7.99", category: "Luxury Crepes" },
  { id: "15", name: "Strawberry and Banana Crepe", description: "Freshly cooked crepe topped with sliced banana pieces, sliced strawberry pieces & drizzled with our belgian milk chocolate sauce", price: "£7.99", category: "Luxury Crepes" },
  { id: "16", name: "Orea Cookie Crepe", description: "Freshly cooked crepe topped with crushed oreo cookies & drizzled with our belgian milk and belgian white chocolate sauce.", price: "£8.25", category: "Luxury Crepes" },
  { id: "17", name: "Kinder Bueno Crepe", description: "Freshly cooked crepe topped with sliced kinder bueno chocolate & drizzled with our belgian milk chocolate and belgian white chocolate sauce", price: "£8.25", category: "Luxury Crepes" },
  { id: "18", name: "White Chocolate & Strawberry Crepe", description: "Freshly cooked crepe topped with sliced strawberry pieces & drizzled with our belgian white chocolate sauce.", price: "£7.99", category: "Luxury Crepes" },
  { id: "19", name: "Nutty Ferrero Rocher Crepe", description: "Freshly cooked crepe topped with choped hazelnut pieces, ferrero rocher chocolate & drizzled with nuttela sauce.", price: "£8.25", category: "Luxury Crepes" },
  { id: "20", name: "Maple Syrup Crepe", description: "Freshly cooked crepe sprinkled with cinnamon & served with a shot of original luxury canadian maple syrup", price: "£7.99", category: "Luxury Crepes" },
  { id: "21", name: "Biscoff Crepe", description: "Freshly cooked crepe sprinkled with cinnamon & served with a shot of original luxury canadian maple syrup.", price: "£7.99", category: "Luxury Crepes" },
  { id: "22", name: "Raspberry and Blueberry Crepe", description: "Freshly cooked crepe topped with fresh raspberry and blueberry drizzled with our luxury belgian white chocolate sauce", price: "£8.25", category: "Luxury Crepes" },
  { id: "23", name: "Banana and Chocolate Crepe", description: "Freshly cooked crepe topped with fresh banana and drizzled with our luxury belgian milk chocolate sauce", price: "£7.99", category: "Luxury Crepes" },


  // Cookie Dough
  { id: "24", name: "Milk Chocolate Chip", description: "Freshly baked Hot cookie dough served with vanilla gelato and luxury belgian milk chocolate sauce ", price: "£7.49", category: "Cookie Dough" },
  { id: "25", name: "White Chocolate Chip Cookie Dough", description: "Freshly baked hot white cookie dough served with vanilla gelato and luxury belgian white chocolate sauce ", price: "£7.49", category: "Cookie Dough" },
  { id: "26", name: "Double Chocolate Chip", description: "Freshly baked hot double chocolate chip cookie dough served with vanilla gelato and luxury belgian milk chocolate sauce ", price: "£7.49", category: "Cookie Dough" },
  { id: "27", name: "Half and Half", description: "Freshly baked hot half milk and half white cookie dough served with vanilla gelato and luxury belgian milk and white chocolate sauce ", price: "£7.99", category: "Cookie Dough" },
  { id: "28", name: "Oreo", description: "Freshly baked hot milk cookie dough served with vanilla gelato, crushed oreo cookies and luxury belgian milk and white chocolate sauce", price: "£7.99", category: "Cookie Dough" },
  { id: "29", name: "Biscoff", description: "Freshly baked hot milk cookie dough served with vanilla gelato, crushed biscoff crumbs and luxury biscoff sauce ", price: "£7.49", category: "Cookie Dough" },
  { id: "30", name: "Kinder Bueno", description: "Freshly baked hot half milk and half white cookie dough served with vanilla gelato, crushed kinder bueno pieces and luxury belgian milk and white chocolate sauce", price: "£7.99", category: "Cookie Dough" },
  { id: "31", name: "Ferrero Rocher", description: "Freshly baked Hot cookie dough served with ferrero rocher chocolate, vanilla gelato and nuttella chocolate sauce", price: "£7.99", category: "Cookie Dough" },
  { id: "32", name: "Strawberry and White", description: "Freshly baked hot white cookie dough served with fresh strawberries, vanilla gelato and luxury belgian white chocolate sauce", price: "£7.99", category: "Cookie Dough" },
  { id: "33", name: "Nutella and Strawberry", description: "Freshly baked hot milk cookie dough served with fresh strawberries, vanilla gelato and nutella chocolate sauce", price: "£7.99", category: "Cookie Dough" },

  // Sundaes
  { id: "34", name: "Banofee", description: "Banana and toffee gelato served with luxurios caramel sauce, toffee fudge pieces and fresh banana topped with whipped cream and cigar wafer ", price: "£7.75", category: "Sundaes" },
  { id: "35", name: "Ferrero Royal", description: "Ferrero rocher, vanilla and chocolate gelato served with hot chocolate and nutella sauce topped with whipped cream, chopped hazelnuts and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "36", name: "Kinderly Bueno Sundae", description: "Kinder bueno, vanilla and chocolate gelato served with belgian milk and white chocolate sauce topped with whipped cream, kinder bueno pieces and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "37", name: "Blue Bubblegum", description: "Bubblegum and vanilla gelato served with tropical blue sauce topped with whipped cream, fresh blueberries and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "38", name: "Oreo Cookie", description: "Oreo cookie and vanilla gelato served with belgian milk and white chocolate sauce topped with whipped cream, crushed oreo cookies and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "39", name: "Strawberry Paradise", description: "Strawberry and vanilla gelato served with luxurious strawberry sauce, fresh strawberries topped with whipped cream and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "40", name: "The Great Knickerbocker Glory Sundae", description: "Chocolate, Strawberry and vanilla gelato served with luxurious strawberry and chocolate sauce, fresh strawberries chops topped with whipped cream and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "41", name: "Mango Loco", description: "Mango and vanilla gelato served with premium mango sauce topped with whipped cream and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "42", name: "Tropical Paradise", description: "Mango, coconut and banana gelato served with mango sauce topped with fresh banana slices, whipped cream and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "43", name: "Banana Classic Split", description: "Banana,chocolate and vanilla gelato served with belgian chocolate sauce topped with fresh banana whipped cream and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "44", name: "Choco Heaven", description: "Chocolate and vanilla gelato served with belgian milk chocolate sauce, chocolate syrup, topped with whipped cream and chocolate flakes and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "45", name: "Minty Mint", description: "Mint chocolate and vanilla gelato served with mint and chocolate syrup topped with whipped creame, mint chocolate and cigar wafer ", price: "£7.75", category: "Sundaes" },
  { id: "46", name: "Biscoff", description: "Biscoff, Vanilla and toffee gelato served with biscoff and caramel sauce topped with whipped cream, biscoff crumbs and cigar wafer", price: "£7.75", category: "Sundaes" },
  { id: "47", name: "Classic Sorbet (gf)", description: "Lemon and mango sorbet served with mango and lemon sauce topped with fresh strawberries", price: "£7.75", category: "Sundaes" },


  // Candy Shakes
  { id: "48", name: "Milky Way", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "49", name: "Galaxy Chocolate", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "50", name: "Galaxy Caramel", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "51", name: "Skittles", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "52", name: "Maltesers", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "53", name: "Aero Mint", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "54", name: "Bounty", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "55", name: "Kinder Bueno", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "56", name: "Ferrero Rocher", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "57", name: "Snickers", description: "", price: "£5.39", category: "Candy Shakes" },
  { id: "58", name: "Reeses", description: "", price: "£5.39", category: "Candy Shakes" },

  // Luxurious Milkshakes
  { id: "59", name: "Luxurious Ferrero", description: "Ferrero Gelato, Nuts, Nuttella, Ferrero, Cheesecake", price: "£6.99", category: "Luxurious Milkshakes" },
  { id: "60", name: "Premium Strawberrylicious", description: "Strawberry Gelato, Strawberry sauce, fresh strawberries, strawberry cheesecake", price: "£6.99", category: "Luxurious Milkshakes" },
  { id: "61", name: "Exceptional Bubblious", description: "Bubblegum Gelato, tropical blue sauce, fresh blue berries, vanilla cheesecake", price: "£6.99", category: "Luxurious Milkshakes" },
  { id: "62", name: "Premium Red Velvet", description: "Red velvet Gelato, Raspberry sauce, fresh raspberries, vanilla cheesecake", price: "£6.99", category: "Luxurious Milkshakes" },
  { id: "63", name: "Chocolicious", description: "Chocolate Gelato, dairymilk chocolate, chocolate sauce, chocolate cheesecake", price: "£6.99", category: "Luxurious Milkshakes" },
  { id: "64", name: "Crunchy Biscoff", description: "Biscoff gelato, chrushed biscoff crumbs, reeses chocolate, biscoff cheesecake ", price: "£6.99", category: "Luxurious Milkshakes" },
  { id: "65", name: "Double Chocolicious Muffin", description: "Vanilla gelato, chocolate flakes, chocolate muffin, chocolate sauce ", price: "£6.99", category: "Luxurious Milkshakes" },


  // Custard Puddings
  { id: "66", name: "Chocolate Fudge Cake and Custard", description: "", price: "£4.49", category: "Custard Puddings" },
  { id: "67", name: "Apple Custard", description: "", price: "£4.49", category: "Custard Puddings" },
  { id: "68", name: "Corn Flake Tart and Custard ", description: "", price: "£4.49", category: "Custard Puddings" },
  { id: "69", name: "Carrot Cake and Custard", description: "", price: "£4.49", category: "Custard Puddings" },
  { id: "70", name: "Chocolate Brownie and Custard", description: "", price: "£4.49", category: "Custard Puddings" },

  // Cheesecakes
  { id: "71", name: "Biscoff", description: "", price: "£4.49", category: "Cheesecakes" },
  { id: "72", name: "Vanilla", description: "", price: "£4.49", category: "Cheesecakes" },
  { id: "73", name: "Oreo", description: "", price: "£4.49", category: "Cheesecakes" },
  { id: "74", name: "Kinder", description: "", price: "£4.49", category: "Cheesecakes" },
  { id: "75", name: "Ferrero Rocher ", description: "", price: "£4.49", category: "Cheesecakes" },
  { id: "76", name: "Strawberry", description: "", price: "£4.49", category: "Cheesecakes" },
  { id: "77", name: "Choco Vanilla Cheese Cake ", description: "", price: "£4.49", category: "Cheesecakes" },


  // Cakes
  { id: "78", name: "Chocolate Fudge Cake", description: "", price: "£3.99", category: "Cakes" },
  { id: "79", name: "Coconut Sponge Cake", description: "", price: "£3.99", category: "Cakes" },
  { id: "80", name: "Carrot Cake", description: "", price: "£3.99", category: "Cakes" },
  { id: "81", name: "Malteseres Cake", description: "", price: "£3.99", category: "Cakes" },
  { id: "82", name: "Cookies and Cream Cake", description: "", price: "£3.99", category: "Cakes" },
  { id: "83", name: "Red Velvet Cake", description: "", price: "£3.99", category: "Cakes" },
  { id: "84", name: "New Sprinkle Sponge Cake", description: "", price: "£4.9", category: "Cakes" },

  // Pancakes
  { id: "85", name: "Pancakes", description: "Choose any 2", price: "£7.89", category: "Pancakes" },
  // { id: "32", name: "Nutella Pancakes", description: "Pancakes with Nutella and banana", price: "£7.50", category: "Pancakes" },
  // { id: "33", name: "Berry Pancakes", description: "Fresh berries and whipped cream", price: "£7.50", category: "Pancakes" },

  //Gelato Milkshakes
  { id: "86", name: "Gelato Milkshakes", description: "Choose any 2 flavour", price: "£5.29", category: "Gelato Milkshakes" },

  // Matilda Cake
  { id: "87", name: "Matilda Cake(New)", description: "Multilayer chocolate cake drizzled with luxurious beligan milk chocolate sauce topped with milk chocolate flakes", price: "£7.29", category: "Matilda Cake" },

  // Chocolate Fondue
  { id: "88", name: "Chocolate Fondue For You", description: "fresh strawberry, fresh banana, luxury belgian milk chocolate, white chocolate, chocolate cake, choose any two scoops of ice cream", price: "£11.99", category: "Chocolate Fondue" },

  // Brownies
  { id: "89", name: "Double Chocolate Brownie", description: "hot double chocolate brownie served with luxury belgian milk chocolate sauce and a scoop of vanilla gelato topped with whipped cream", price: "£4.99", category: "Brownies" },
  { id: "90", name: "Chocolate Chip Brownie", description: "hot chocolate chip brownie served with luxury belgian milk chocolate sauce and a scoop of vanilla gelato topped with whipped cream", price: "£4.99", category: "Brownies" },

  // Fresh Chocolate Fruits
  { id: "91", name: "Chocolate Strawberries", description: "Fresh strawberries dipped in chocolate", price: "£5.50", category: "Fresh Chocolate Fruits" },
  { id: "92", name: "Mixed Chocolate Fruits", description: "Assorted fruits with chocolate coating", price: "£6.50", category: "Fresh Chocolate Fruits" },

  // Fresh Fruit Platters
  { id: "93", name: "Milk Chocolate Strawberry", description: "Fresh strawberries covered with luxurious belgian milk chocolate sauce served with strawberry gelato", price: "£5.49", category: "Fresh Fruit Platters" },
  { id: "94", name: "White Chocolate Strawberry", description: "Fresh strawberries covered with luxurious belgian white chocolate sauce served with vanilla gelato", price: "£5.49", category: "Fresh Fruit Platters" },
  { id: "95", name: "Nutella Chocolate Strawberry", description: "Fresh strawberries covered with nutella chocolate sauce served with chocolate gelato", price: "£5.49", category: "Fresh Fruit Platters" },
  { id: "96", name: "Banana and Milk Chocolate", description: "Fresh chopped bananas covered with luxurious belgian milk chocolate sauce served with banana gelato", price: "£5.49", category: "Fresh Fruit Platters" },
  { id: "97", name: "Half and Half", description: "Fresh strawberries and Fresh chopped bananas covered with luxurious belgian milk chocolate sauce served with banana and strawberry gelato", price: "£6.49", category: "Fresh Fruit Platters" },

  // Smoothies
  { id: "98", name: "Strawberry Sunset", description: "", price: "£3.95", category: "Smoothies" },
  { id: "99", name: "Classic banana", description: "", price: "£3.95", category: "Smoothies" },
  { id: "100", name: "Strawberry and Banana", description: "", price: "£4.45", category: "Smoothies" },
  { id: "101", name: "Thrilling blueberry", description: "", price: "£4.45", category: "Smoothies" },

  // Mocktails
  { id: "102", name: "Refresher Lemon Mint", description: "", price: "£4.99", category: "Mocktails" },
  { id: "103", name: "Strawberry Mint Sunset", description: "", price: "£4.99", category: "Mocktails" },
  { id: "104", name: "Frenzy Mango Mint", description: "", price: "£4.99", category: "Mocktails" },

  // Drinks
  { id: "105", name: "Coca Cola", description: "330 ml", price: "£1.49", category: "Drinks" },
  { id: "106", name: "Fanta", description: "330 ml", price: "£1.49", category: "Drinks" },
  { id: "107", name: "Pepsi", description: "330 ml", price: "£1.49", category: "Drinks" },
  { id: "108", name: "Sprite", description: "330 ml", price: "£1.49", category: "Drinks" },
  { id: "109", name: "J20", description: "Flavour - Apple and mango, orange and passion, apple and raspberry", price: "£2.49", category: "Drinks" },
  { id: "110", name: "Water Bottle", description: "500 ml", price: "£1.29", category: "Drinks" },

  // Classic Donuts
  { id: "111", name: "White Chocolate", description: "", price: "£1.99", category: "Classic Donuts" },
  { id: "112", name: "Milk Chocolate", description: "", price: "£1.99", category: "Classic Donuts" },
  { id: "113", name: "Nutella", description: "", price: "£1.99", category: "Classic Donuts" },
  { id: "114", name: "Biscoff", description: "", price: "£1.99", category: "Classic Donuts" },
  { id: "115", name: "Kinder", description: "", price: "£1.99", category: "Classic Donuts" },
  { id: "116", name: "Oreo", description: "", price: "£1.99", category: "Classic Donuts" },
  { id: "117", name: "Choose any 3", description: "", price: "£4.99", category: "Classic Donuts" },
];
