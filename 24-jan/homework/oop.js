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

  // Public method to display information
  greet() {
      return `This is a ${this.#name} and it can ${this.#qualities} ${this.#value}.`;
  }
}

// Create instances
const animal1 = new Animal('cat', 'run', 'very fast');
const animal2 = new Animal('dog', 'run', 'very fast');
const animal3 = new Animal('rat', 'run', 'very fast');

// Access using getter methods
console.log(animal1.greet());
console.log(animal2.greet());
console.log(animal3.greet());

// Modify properties using setter methods
animal1.setName('tiger');
animal1.setQualities('hunt');
animal1.setValue('with precision');
console.log(animal1.greet());
