// Parent class Animal
class Animal {
    // Private fields
    #name;
    #qualities;
    #value;

    constructor(name, qualities, value) {
        this.#name = name;
        this.#qualities = qualities;
        this.#value = value;
    }

    // Getter methods to access private fields
    getName() {
        return this.#name;
    }

    getQualities() {
        return this.#qualities;
    }

    getValue() {
        return this.#value;
    }

    // Setter methods to update private fields
    setName(name) {
        this.#name = name;
    }

    setQualities(qualities) {
        this.#qualities = qualities;
    }

    setValue(value) {
        this.#value = value;
    }

    // Method to display information
    greet() {
        return `This is a ${this.#name} and it can ${this.#qualities} ${this.#value}.`;
    }
}

// Subclass Dog that inherits from Animal
class Dog extends Animal {
    constructor(name, qualities, value, breed) {
        super(name, qualities, value);  
        this.breed = breed;  
    }

    // Override the greet method to include breed
    greet() {
        return `${super.greet()} It is a ${this.breed}.`;  
    }
}

// Subclass Cat that inherits from Animal
class Cat extends Animal {
    constructor(name, qualities, value, color) {
        super(name, qualities, value);  // Call the parent class constructor
        this.color = color;  // Additional property specific to Cat
    }

    // Override the greet method to include color
    greet() {
        return `${super.greet()} It is ${this.color}.`;  // Use parent class method and add color info
    }
}

// Create instances of Dog and Cat
const animal1 = new Dog('dog', 'run', 'very fast', 'Golden Retriever');
const animal2 = new Cat('cat', 'jump', 'very high', 'black');

// Accessing the greet method from Dog and Cat instances
console.log(animal1.greet()); 
console.log(animal2.greet()); 
