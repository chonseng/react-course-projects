'use strict';

// Arguments object - no longer bound with arrow function
var add = function add(a, b) {
	// console.log(arguments);
	return a + b;
};
console.log(add(55, 1, 101));

// this keyword - no longer bound
var user = {
	name: 'Peter',
	cities: ['Philadelphia', 'New York', 'Dublin'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city + '!';
		});
	}
};
console.log(user.printPlacesLived());

// Challenge
var multiplier = {
	numbers: [1, 2, 3, 4],
	multiplyBy: 5,
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (n) {
			return n * _this2.multiplyBy;
		});
	}
};
console.log(multiplier.multiply());
