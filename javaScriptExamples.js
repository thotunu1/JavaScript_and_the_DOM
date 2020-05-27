/*function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

getClothing(false)*/


/*function getClothing(isCold) {
    if (isCold) {
      const freezing = 'Grab a jacket!';
    } else {
      const hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }

  getClothing(false)*/

  /*use let when you plan to reassign new values to a variable, and
  use const when you don’t plan on reassigning new values to a variable.
  Since const is the strictest way to declare a variable, we suggest that 
  you always declare variables with const because it'll make your code easier 
  to reason about since you know the identifiers won't change throughout the 
  lifetime of your program. If you find that you need to update a variable or change it,
  then go back and switch it from const to let.*/


/*let instructor = 'James';
instructor = 'Richard';
console.log(instructor);*/

/*
 * Programming Quiz: Using Let and Const (1-1)
 */

/*const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();*/

/*
 * Instructions: Change the `greeting` string to use a template literal.
 */

 /*Old way
const myName = 'JARR Johnson';
const greeting = 'Hello, my name is ' + myName;
console.log(greeting);*/

/*New Way
const myName = 'JARR Johnson';
let greeting = `Hello, my name is ${myName}`;
console.log(greeting);*/

/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

/*const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name"> ${animal.name}</h3>
        <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact">${animal.fact}</p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief">${animal.summary}</p>
        </div>
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));*/

/*Destructuring values from an array*/

/*const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);*/


/*Destructuring values from an object*/

/*const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);*/

/*const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let {radius, getArea, getCircumference} = circle;

  console.log (getArea());*/

  /*Calling getArea() will return NaN. When you destructure the object and store the getArea() method into the getArea variable, 
  it no longer has access to this in the circle object which results in an area that is NaN.*/



/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

/*const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);*/

/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

/*const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (const day of days) {
  var upperDay = day.charAt(0).toUpperCase() + day.slice(1);
  console.log(upperDay);
}*/

/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

/*const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);*/


/*By using the rest parameter, items is assigned the rest of the values in the array (as an array).*/
/*const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);*/

/*Using the rest parameter

Fortunately, with the addition of the rest parameter, you can rewrite the sum() function to read more clearly.*/

function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
  console.log(total);
}

console.log(sum(2, 6));
/*console.log(sum(2, 3, 3, 5, 7, 10));
console.log(sum(7, 1432, 12, 13, 100));
console.log(sum());*/

/*function average(...averages) {
    if (averages.length == 0){return 0;}
 let total = 0;
 let avg = 0;
 const count = averages.length;
 for(const average of averages) {
   total += average;
 }
 avg = total/count;
 return avg;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());*/
