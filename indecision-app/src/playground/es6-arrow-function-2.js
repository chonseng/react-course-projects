// Arguments object - no longer bound with arrow function
const add = (a, b) => {
	// console.log(arguments);
	return a + b;
}
console.log(add(55, 1, 101));

// this keyword - no longer bound
const user = {
	name: 'Peter',
	cities: ['Philadelphia', 'New York', 'Dublin'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
	}
}
console.log(user.printPlacesLived());

// Challenge
const multiplier = {
	numbers: [1,2,3,4],
	multiplyBy: 5,
	multiply() {
		return this.numbers.map((n) => n * this.multiplyBy);
	}
}
console.log(multiplier.multiply())