// Or replace interface to type, it'll be the same //
// type PersonInterface = {} //
interface PersonInterface {
	firstName: string;
	readonly email: string;
	phones: string[];
	notes?: string[];
	addPhoneNumber(number: string): void;
	getPhoneNumbers(): string[];
	getInfo(): string;
}

interface EmailGetter extends PersonInterface {
	getEmail(): string;
	setNotes?(): void;
	getNotes?(): string[];
}

class Person implements EmailGetter {
	readonly phones: string[] = [];
	private address: string = "Default address";
	constructor(public firstName: string, readonly email: string) {}

	addPhoneNumber(phone: string): void {
		this.phones.push(phone);
	}

	set personAddress(address: string) {
		this.address = address;
	}
	getPhoneNumbers() {
		return this.phones;
	}

	getInfo() {
		return `
    Person name is: ${this.firstName},
    email: ${this.email},
    phones: ${this.phones},
    address: ${this.personAddress}`;
	}

	getEmail() {
		return this.email;
	}

	get personAddress() {
		return this.address;
	}
}

// ~~~~~~~~~~~ Create one Person ~~~~~~~~~~ //
let person1 = new Person("Teez0ne", "teez0ne@");
console.log(person1.getInfo());
person1.addPhoneNumber("(270) 307-7745");
person1.addPhoneNumber("(419) 471-3518");
person1.personAddress = "New Hampshire";
console.log(person1.getInfo());
console.log("User email method: " + person1.getEmail());

// ~~~~ Create Person 2 from Interface ~~~ //
let person2: PersonInterface = {
	firstName: "Margaret Clarke",
	email: "hannu@lu.sd",
	phones: ["(641) 663-7883"],
	addPhoneNumber(number: string) {
		this.phones.push(number);
	},
	getPhoneNumbers() {
		return this.phones;
	},
	getInfo() {
		return "" + this.firstName + " email: " + this.email;
	},
};

console.log(person2.getPhoneNumbers());
person2.addPhoneNumber("(372) 950-2423");
console.log(person2.getInfo());

// ~~~~~~~~~~~~~~~ Person 3 ~~~~~~~~~~~~~~ //
let person3: PersonInterface;
person3 = new Person("Mark Gardner", "cac@ikvarcir.ba");
console.log(person3.getInfo());
