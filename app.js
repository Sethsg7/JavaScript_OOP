console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");



class Person {
  //Classes are reusable templates for objects.  
  constructor(name, pets, residence, hobbies) {
    //Constructor makes obj properties.
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
  //Methods can be added and called.
  }
  removeHobby(hobby) {
    //Find the index of the parameter.
    let foundIdx = this.hobbies.indexOf(hobby);

    //Collect all values in front of the parameter hobby.
    let valuesBefore = this.hobbies.slice(0, foundIdx);

    //Collect all values after. foundIdx + 1 means to go to the end of the array.
    let valuesAfter = this.hobbies.slice(foundIdx + 1);

    //Update hobbies. Concat to add them with the parameter hobby removed.
    this.hobbies = valuesBefore.concat(valuesAfter);
  }
  greeting() {
    console.log("Hello, how are you today?");
  }
}

let Seth = new Person("Seth", "Misty", "New Orleans", "Video Games");
//Filling out the constructor.
console.log(Seth);






// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  //Extend adds new class as a subtype of the previous.
  constructor(name, pets, residence, hobbies, occupation) {
  //New constructor because this is a new class.
  
    super(name, pets, residence, hobbies);
        //Super add the properties from the Parent class.

    this.occupation = occupation;
   //Assigning new property.
  }
  greeting() {
    console.log("Hello, I'm learning prototypes.");
  }
}




// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let person = new Person("Seth", 1, "New Orleans", [
   //Using prototype to make a new Person.
  "Gaming",
  "Japanese",
  "Drawing",
]);

console.log(person);

let coder = new Coder(
  //Using prototype to make a new Coder
  "Seth",
  0,
  "New Orleans",
  ["Gaming", "Japanese", "Drawing"],
  "Full Stack Web Developer"
);

coder.addHobby("Cooking");

console.log(coder);







// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor() {
  //Constructor can be empty for this property to be placed.
    this.result = 0;
  }

  add(num1, num2) {
    this.result = num1 + num2;
    return this.result;
  }

  subtract(num1, num2) {
    this.result = num1 - num2;
    return this.result;
  }

  multiply(num1, num2) {
    this.result = num1 * num2;
    return this.result;
  }

  divide(num1, num2) {
    this.result = num1 / num2;
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }
}

let calc = new Calculator();

calc.add(1, 2);
calc.displayResult();

calc.subtract(1, 2);
calc.displayResult();

calc.multiply(1, 2);
calc.displayResult();

calc.divide(1, 2);
calc.displayResult();
