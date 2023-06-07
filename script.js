class Car {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	carInfo() {
		console.log(`this is a ${this.make} ${this.model} from ${this.year}`);
	}
	startCar() {
		console.log("start Car");
	}
}

// const car1 = new Car("Toyota", "Camry", "2023");
// car1.carInfo();
// const car2 = new Car("Subaru", "WRX", "2018");
// car2.carInfo();
// car1.startCar();

class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a sound.`);
	}
}

class Dog extends Animal {
	speak() {
		//this.name points to the Animal class name
		console.log(`${this.name} barks`);
	}
}

const dog1 = new Dog("Doug");
dog1.speak();
