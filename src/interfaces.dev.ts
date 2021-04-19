// Or replace interface to type, it'll be the same //
// type PersonInterface = {} //
interface PersonInterface {
	firstName: string;
	readonly email: string;
	phones: string[];
<<<<<<< HEAD
	address?: string;

	addPhoneNumber(phoneNumber: string): void;
	setAddres?(addres: string): void;
=======
	notes?: string[];
	addPhoneNumber(number: string): void;
>>>>>>> e2a4a61e592f8e8507ca0c931e8c8caa4a358511
	getPhoneNumbers(): string[];
	getInfo(): string;
}

interface EmailGetter extends PersonInterface {
	getEmail(): string;
<<<<<<< HEAD
	getAddress?(): string;
=======
	setNotes?(): void;
	getNotes?(): string[];
>>>>>>> e2a4a61e592f8e8507ca0c931e8c8caa4a358511
}

class Person implements EmailGetter {
	readonly phones: string[] = [];
<<<<<<< HEAD
	constructor(
		public firstName: string,
		readonly email: string,
		public address: string = "Default address"
	) {}
=======
	private address: string = "Default address";
	constructor(public firstName: string, readonly email: string) {}
>>>>>>> e2a4a61e592f8e8507ca0c931e8c8caa4a358511

	addPhoneNumber(phone: string): void {
		this.phones.push(phone);
	}

<<<<<<< HEAD
	setAddres(addres: string): void {
		this.address = addres;
	}

	getPhoneNumbers() {
		return this.phones;
	}

	getInfo(): string {
=======
	set personAddress(address: string) {
		this.address = address;
	}
	getPhoneNumbers() {
		return this.phones;
	}

	getInfo() {
>>>>>>> e2a4a61e592f8e8507ca0c931e8c8caa4a358511
		return `
    Person name is: ${this.firstName},
    email: ${this.email},
    phones: ${this.phones},
<<<<<<< HEAD
    address: ${this.address}`;
	}

	getEmail(): string {
		return this.email;
	}

	getAddress(): string {
=======
    address: ${this.personAddress}`;
	}

	getEmail() {
		return this.email;
	}

	get personAddress() {
>>>>>>> e2a4a61e592f8e8507ca0c931e8c8caa4a358511
		return this.address;
	}
}

// ~~~~~~~~~~~ Create one Person ~~~~~~~~~~ //
let person1 = new Person("Teez0ne", "teez0ne@");
console.log(person1.getInfo());
person1.addPhoneNumber("(270) 307-7745");
person1.addPhoneNumber("(419) 471-3518");
<<<<<<< HEAD
person1.setAddres("655 Hanuwi Pass");
=======
person1.personAddress = "New Hampshire";
>>>>>>> e2a4a61e592f8e8507ca0c931e8c8caa4a358511
console.log(person1.getInfo());
console.log("User email method: " + person1.getEmail());

// ~~~~ Create Person 2 from Interface ~~~ //
let person2: PersonInterface = {
	firstName: "Margaret Clarke",
	email: "hannu@lu.sd",
	phones: ["(641) 663-7883"],
<<<<<<< HEAD
	address: "New Address",
	addPhoneNumber(phoneNumber: string): void {
		this.phones.push(phoneNumber);
	},
	getPhoneNumbers(): string[] {
		return this.phones;
	},
	getInfo() {
		return "" + this.firstName + " email: " + this.email + this.address;
=======
	addPhoneNumber(number: string) {
		this.phones.push(number);
	},
	getPhoneNumbers() {
		return this.phones;
	},
	getInfo() {
		return "" + this.firstName + " email: " + this.email;
>>>>>>> e2a4a61e592f8e8507ca0c931e8c8caa4a358511
	},
};

console.log(person2.getPhoneNumbers());
person2.addPhoneNumber("(372) 950-2423");
console.log(person2.getInfo());

// ~~~~~~~~~~~~~~~ Person 3 ~~~~~~~~~~~~~~ //
let person3: PersonInterface;
person3 = new Person("Mark Gardner", "cac@ikvarcir.ba");
console.log(person3.getInfo());
