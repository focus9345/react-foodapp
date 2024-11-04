const sql = require('better-sqlite3');
const db = sql('menu.db');
const dateNow = new Date().toDateString();

const dummyMeals = [
  {
    title: 'Pizza Bacon Mushroom',
    slug: 'pizza-bacon-mushroom',
    image: '/menu/pexels-bananamade-2762942.jpg',
    summary:
      'A mouth-watering pizza with 2 cheeses, marinaera sauce, basil, bacon and mushrooms.',
    instructions: `
      1. Prepare the bread:
         Mix the yeast 2 teaspoons in warm water 1 and 1/3 cup add 1 tablespoon sugar, wait 20 min. Mix 2 cups of flower, 1 tablespoon Oil adn pinch of salt. Let rise 30 min.

      2. Cook the bread:
         Heat a pan with a bit of oil. Cook the bread 20 min at 300-310°F.

      3. Assemble the Pizza:
         Put marinara sauce on, bacon, basil, mushrooms and cheese, Mozzarella, sharp chedder.

      4. Bake:
         Cook the pizza 20 min at 300-310°F.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: 'John Snow',
    creator_email: 'johnsnow@example.com',
    date: dateNow,
    calories: 300,
    servings: 2
  },
  {
    title: 'Lemon Pepper Salmon',
    slug: 'lemon-pepper-salmon',
    image: '/menu/pexels-bemistermister-3490368.jpg',
    summary:
      'A simple lemon pepper salmon.',
    instructions: `
      1. Prepare the salmon:
         Lemon pepper seasoning 1 table spoon, pinch of salt, and squeeze fresh lemon on the salmon stake.

      2. Cook the salmon:
         Heat a pan with a bit of oil. Cook on frying pan 5min at 300-310°F.

      3. Assemble the rice:
         Put marinara sauce on, bacon, basil, mushrooms and cheese, Mozzarella, sharp chedder.

      4. Assemble the asparagus:
         Cook asparagus in another pan, with teaspoon of oil, salt and pepper to taste.

      4. Serve:
         Complete the assembly with the rice on bottom, asparagus, and salmon on top.
    `,
    creator: 'John Snow',
    creator_email: 'johnsnow@example.com',
    date: dateNow,
    calories: 250,
    servings: 2
  },
  {
    title: 'Spicy Curry',
    slug: 'spicy-curry',
    image: '/menu/pexels-shantanu-pal-938952-2679501.jpg',
    summary:
      'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into bite-sized pieces.

      2. Sauté vegetables:
         In a pan with oil, sauté the vegetables until they start to soften.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for another minute.

      4. Simmer with coconut milk:
         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

      5. Serve:
         Enjoy this creamy curry with rice or bread.
    `,
    creator: 'John Snow',
    creator_email: 'johnsnow@example.com',
    date: dateNow,
    calories: 250,
    servings: 2
  },
  {
    title: 'Simple Salad',
    slug: 'simple-salad',
    image: '/menu/pexels-iina-luoto-460132-1211887.jpg',
    summary:
      'Fresh greens makes a simple salad.',
    instructions: `
      1. Prepare the filling:
         Cut and mix fresh lettuce, red olives, cherry tomatoes, apple slices.

      2. Fill the dumplings:
         Place a cutting of cubed goat cheese, chive flavored.

      3. Dressing:
         Drizzle a balsamic glaze over everything.

      4. Serve:
         Enjoy fresh.
    `,
    creator: 'John Snow',
    creator_email: 'johnsnow@example.com',
    date: dateNow,
    calories: 200,
    servings: 4
  },
  {
    title: 'Avocado Toast',
    slug: 'avocado-toast',
    image: '/menu/pexels-kyleroxas-2122294.jpg',
    summary:
      "Avacado mind-blowing toast will tingle your taste buds.",
    instructions: `
      1. Cook the egg:
         Boil water and spin the water then add egg.

      2. Prepare the toast:
         Use your best bread cut into slices and toast.

      3. Combine:
         Cut lettuce, place on toast, next place cream cheese one teaspoon, place egg make sure not to break yoke, and add 1/2 peeled avacodo on top.

      4. Serve:
         Serve hot, garnished with parsley or dill if desired.
    `,
    creator: 'John Snow',
    creator_email: 'johnsnow@example.com',
    date: dateNow,
    calories: 600,
    servings: 2
  },
  {
    title: 'Authentic Pizza',
    slug: 'authentic-pizza',
    image: '/menu/pexels-lum3n-44775-604969.jpg',
    summary:
      'Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.',
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    creator: 'John Snow',
    creator_email: 'johnsnow@example.com',
    date: dateNow,
    calories: 450,
    servings: 4
  },
  {
    title: 'Shrimp Salad',
    slug: 'shrimp-salad',
    image: '/menu/pexels-mantoine-1832016.jpg',
    summary:
      'Crispy, light shrimp salad with corn, cilantro, onion, cabbage and avocado.',
    instructions: `
      1. Prepare the shrimp:
         Grill Shrimp until orange and crispy, season with pepper, salt and lime juice.

      2. Prepare the veggies:
         Dice the onions, bell pepper, avocado. Shred lettuce, red cabbage, cilantro. Cut corn off cob.

      3. Combine:
      Add all veggies to bowl, place shrimp on top.

      4. Serve:
      Serve cold, shrimp hot, drizzel aioli sauce on top, add slice of lime.
 `,
    creator: 'John Snow',
    creator_email: 'johnsnow@example.com',
    date: dateNow,
    calories: 310,
    servings: 4
  },
  {
    title: 'Pasta Shrimp ',
    slug: 'pasta-shrimp',
    image: '/menu/pexels-tonyleong81-2092906.jpg',
    summary:
      'A filling simple pasta garlic with spinach, peppers and shrimp.',
    instructions: `
      1. Prepare the pasta:
        Bring large pot to boil, add teaspoon vinager, add pasta turn heat down to med high, cook till soft.

      2. Grill the shrimp:
        Grill Shrimp until orange, season with pepper, salt.
    
      3. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes, .
    
      4. Add herbs and seasoning:
         Drizzle with teaspoon melted butter, shred permission cheese.
    
      5. Serve:
         Enjoy this simple, flavorful dish as a meal.
    `,
    creator: 'John Snow',
    creator_email: 'johnsnow@example.com',
    date: dateNow,
    calories: 280,
    servings: 4,
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       slug TEXT NOT NULL UNIQUE,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL,
       date TEXT NOT NULL,
       calories INT NOT NULL,
       servings INT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @title,
         @slug,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @date,
         @calories,
         @servings
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();