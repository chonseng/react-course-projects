var nameVar = "Peter";
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "Jen";
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = "Peter Che";
let firstName;

if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);