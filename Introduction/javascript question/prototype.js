
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound.");
  };

  var dog = new Animal("Dog");
  dog.breed = "Labrador";
  dog.speak();

  console.log(Object.getPrototypeOf(dog));

