// Or replace interface to type, it'll be the same //
// type PersonInterface = {} //
interface EmailGetter {
	getEmail(): string;
}
interface PersonInterface extends EmailGetter {
	firstName: string;
	readonly email: string;
	phones: string[];
	phoneNumber: string;

	getPhoneNumbers(): string[];
	getInfo(): string;
}

interface AddressGetter {
	address: string;
}
class Person implements PersonInterface {
	readonly phones: string[] = [];
	address: string = "";
	constructor(public firstName: string, readonly email: string) {}

	set phoneNumber(phone: string) {
		this.phones.push(phone);
	}

	set addr(addres: string) {
		this.address = addres;
	}

	getPhoneNumbers(): string[] {
		return this.phones;
	}

	getInfo(): string {
		let info = "";
		if (this.firstName) info += `Person name is: ${this.firstName}` + "\n";
		if (this.email) info += `email: ${this.email}` + "\n";
		if (this.phones.length > 0) info += `phones: ${this.phones}` + "\n";
		if (this.address) info += `address: ${this.address}`;
		return info;
	}

	getEmail(): string {
		return this.email;
	}

	get addr(): string {
		return this.address;
	}
}

// ~~~~~~~~~~~ Create one Person ~~~~~~~~~~ //
let person1 = new Person("Teez0ne Class", "teez0ne@");
console.info(person1.getInfo());
person1.phoneNumber = "(270) 307-7745";
person1.phoneNumber = "(419) 471-3518";
person1.addr = "655 Hanuwi Pass";
console.info(person1.getInfo());
console.log("User email method: " + person1.getEmail());

// ~~~~ Create Person 2 from Interface ~~~ //
type PersonI = PersonInterface &
	AddressGetter & {
		getInfo(): string;
	};
let person2: PersonI = {
	firstName: "Margaret Clarke PersonI",
	email: "hannu@lu.sd",
	phones: ["(641) 663-7883"],
	address: "New Address",
	set phoneNumber(phoneNumber: string) {
		this.phones.push(phoneNumber);
	},
	getPhoneNumbers(): string[] {
		return this.phones;
	},

	getEmail(): string {
		return this.email;
	},
	getInfo() {
		return "PI " + this.firstName + " email: " + this.email + this.address;
	},
};

console.log("Person2 phone numbers:", person2.getPhoneNumbers());
person2.phoneNumber = "(372) 950-2423";
console.info(person2.getInfo());

// ~~~~~~~~~~~~~~~ Person 3 ~~~~~~~~~~~~~~ //
let person3: PersonInterface & AddressGetter;
person3 = new Person("Mark Gardner Person3", "cac@ikvarcir.ba");
person3.address = "1607 Lako View";
console.info(person3.getInfo());
